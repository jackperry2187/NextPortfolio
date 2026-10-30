---
name: getYouTubeData
description: "Use when refreshing the YouTube stats in src/app/projects/legacy/youtube/youtubeVideosData.ts — scrapes subscriber count, channel total views, and per-video views and likes for the JWolfCrafter channel using the integrated browser, then rewrites the data file and bumps YOUTUBE_STATS_AS_OF. Trigger phrases: update YouTube data, refresh YouTube stats, re-scrape YouTube, update JWolfCrafter stats, update legacy projects stats."
---

# getYouTubeData

Refreshes the stat numbers in [youtubeVideosData.ts](../../../src/app/projects/legacy/youtube/youtubeVideosData.ts).

The 6 uploads are archival — the channel has been dormant since 2013 and nothing new will be posted. **Only `youtubeChannelStats`, the per-video `stats`, and `YOUTUBE_STATS_AS_OF` should change on a refresh.**

## Critical constraint: do not use `fetch` / `curl` / `Invoke-WebRequest`

`youtube.com` returns **HTTP 401** to plain HTTP clients. The page data lives in a `ytInitialData` / `ytInitialPlayerResponse` script blob that only materialises in a real browser engine anyway.

**You must use the integrated browser tools** (`open_browser_page`, `navigate_page`, `run_playwright_code`). If `open_browser_page` fails with `ERR_ABORTED`, retry once with `forceNew: true`.

Corollary for the app itself: live client-side fetching is not viable without a Google Cloud API key, which was deliberately rejected. This file is a committed snapshot on purpose.

## Constants

- Channel: `https://www.youtube.com/@JWolfCrafter`
- Channel ID: `UC8N11PeK9C2gOzFuPC-h01w`
- Videos tab: `https://www.youtube.com/@JWolfCrafter/videos`
- About tab: `https://www.youtube.com/@JWolfCrafter/about`

## Step 1 — Channel header and video list

```
open_browser_page → https://www.youtube.com/@JWolfCrafter/videos
```

The accessibility snapshot alone carries everything needed from this page: the header reports `"17 subscribers"` and `6 videos`, and each grid entry exposes `/watch?v=<id>`, the title, a runtime badge (`"7:20"`), and an `aria-label` view count (`"70 views"`). Counts under 1,000 are **not** abbreviated here, so no tooltip hunting is needed — unlike the PMC scrape.

A video count other than 6 means something went wrong with the scrape, not that content was added.

## Step 2 — Channel total views

The total view count is only on the About tab, and it is not in the header blob:

```js
await page.goto('https://www.youtube.com/@JWolfCrafter/about', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(2500);
return page.evaluate(() => {
  const s = JSON.stringify(window.ytInitialData ?? {});
  return (s.match(/"viewCountText":"([^"]+)"/) ?? [null, null])[1]; // e.g. "296 views"
});
```

Note `viewCountText` here is a bare string, **not** the `{ simpleText }` wrapper used elsewhere in the payload. Strip commas and ` views` before writing it into `totalViews`.

## Step 3 — Per-video views, likes and dates

Views from step 1 are already exact, but likes are not on the grid. Walk the watch pages:

```js
const ids = ['rtnnmo-vw6Y','ey3rcpU1WPg','rdH5y17veLs','tUsKRfRMvc4','OwoPsjo8_N8','H-VGI_-0YZY'];
const out = [];
for (const id of ids) {
  await page.goto('https://www.youtube.com/watch?v=' + id, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);
  out.push({ id, ...await page.evaluate(() => {
    const pr = window.ytInitialPlayerResponse ?? {};
    const s = JSON.stringify(window.ytInitialData ?? {});
    return {
      title: pr.videoDetails?.title,
      views: pr.videoDetails?.viewCount,
      publishDate: pr.microformat?.playerMicroformatRenderer?.publishDate,
      likeAria: (s.match(/"accessibilityText":"([^"]*like this video[^"]*)"/) ?? [null, null])[1],
    };
  }) });
}
return JSON.stringify(out, null, 1);
```

Pass a generous `timeoutMs` (≈180000) — six sequential watch-page loads are slow.

Field mapping:

| Source | Target |
|---|---|
| `videoDetails.viewCount` | `stats.views` |
| like button `accessibilityText` | `stats.likes` |
| `playerMicroformatRenderer.publishDate` | `uploadedAt` |

### Likes

YouTube hides the raw like count; the only exact figure is in the like button's accessibility label:

- `"like this video"` → **0 likes**
- `"like this video along with 1 other person"` → **1 like**
- `"like this video along with N other people"` → **N likes**

Do not use the visible button text — it is abbreviated and renders empty at 0.

### Dates

`publishDate` is a full ISO timestamp in the channel's local zone (US Pacific, `-08:00`/`-07:00`), e.g. `2013-03-05T15:54:32-08:00`. Truncate to `YYYY-MM-DD` — do **not** run it through `new Date()` first, which would shift evening uploads a day. Three videos share `2013-03-05` and two share `2013-03-04`; the component's sort is stable, so the data file's newest-first order is what disambiguates them. Keep that order.

### Duration

`duration` stores the runtime **as YouTube renders it** (`"7:20"`), taken from the badge on the Videos tab. Do not recompute it from `videoDetails.lengthSeconds` — that value is floored, so Ep. 5 (439s) would format as `7:19` and Ep. 4 (962s) as `16:02`, both one second short of what the site shows. It is a fixed property of an archival upload and never changes on a refresh.

### Fallback

If the `ytInitialData` shape has drifted, the channel RSS feed carries titles, ids, publish dates and `media:statistics views` for the 15 most recent uploads (all 6 here):

```
https://www.youtube.com/feeds/videos.xml?channel_id=UC8N11PeK9C2gOzFuPC-h01w
```

It has no like counts, so steps for `stats.likes` still need the watch pages.

## Step 4 — Thumbnails: skip

**Do nothing here.** All 6 thumbnails are already committed under `public/images/youtube/` and wired into `thumbnail`. They are frozen artwork on a dormant channel.

<details>
<summary>One-time thumbnail recovery (not part of a normal refresh)</summary>

`i.ytimg.com` is a plain CDN with no bot protection, so `curl.exe` works here (unlike youtube.com itself). Try resolutions in descending order — `maxresdefault` 404s on uploads old enough to predate HD encoding:

```powershell
foreach ($variant in @('maxresdefault','sddefault','hqdefault')) {
  curl.exe -sf -A "Mozilla/5.0" -o $dest "https://i.ytimg.com/vi/$id/$variant.jpg"
  if ($LASTEXITCODE -eq 0 -and (Get-Item $dest).Length -gt 2000) { break }
}
```

The `-f` flag matters: without it curl writes YouTube's 404 placeholder to disk under a `.jpg` name that looks like a successful download. Validate afterwards — a truncated file still has a valid header:

```powershell
Get-ChildItem "public\images\youtube\*" | ForEach-Object {
  $b = [System.IO.File]::ReadAllBytes($_.FullName)
  $h = ($b[0..1] | ForEach-Object { $_.ToString('X2') }) -join ''
  $st = if ($h -eq 'FFD8' -and $b[-2] -eq 0xFF -and $b[-1] -eq 0xD9) { 'OK' } else { "BAD ($h)" }
  "{0,-30} {1,8} bytes  {2}" -f $_.Name, $b.Length, $st
}
```

File names are slugs of the video title (`skyblock-survival-ep-5.jpg`), not video ids.

</details>

## Step 5 — Rewrite the data file

Update [youtubeVideosData.ts](../../../src/app/projects/legacy/youtube/youtubeVideosData.ts):

1. Set `YOUTUBE_STATS_AS_OF` to the current month and year, e.g. `"October 2026"`.
2. Update `youtubeChannelStats` (`subscribers`, `totalViews`, `videoCount`).
3. Update the per-video `stats` in place, keeping newest-first order.
4. Change **only** those. Leave `id`, `title`, `url`, `thumbnail`, `duration` and `uploadedAt` untouched — the uploads are archival and those fields are fixed.
5. Do not add fields beyond the `YouTubeVideoData` / `YouTubeChannelStats` interfaces.

`totalViews` is the channel-wide figure from step 2, **not** a sum of the per-video views. They happen to match today (296), but YouTube counts deleted and unlisted activity in the channel total, so do not derive one from the other.

## Step 6 — Verify

- `pnpm check`
- `git diff src/app/projects/legacy/youtube/youtubeVideosData.ts` — the diff must touch only `YOUTUBE_STATS_AS_OF`, `youtubeChannelStats` and `stats` lines.
