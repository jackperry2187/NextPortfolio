---
name: getJWolfYouTubeData
description: "Use when refreshing the YouTube half of src/app/projects/legacy/music/musicSongsData.ts — scrapes per-song views and likes for the **JWolf** music channel (@jwolf1081) using the integrated browser, then rewrites the `youtube` blocks and bumps MUSIC_STATS_AS_OF. Trigger phrases: update JWolf YouTube data, refresh music YouTube stats, re-scrape JWolf, update music data, update legacy projects stats. NOT for the JWolfCrafter Minecraft channel (@JWolfCrafter) — use getJWolfCrafterYouTubeData for that."
---

# getJWolfYouTubeData

Refreshes the `youtube` stats in [musicSongsData.ts](../../../src/app/projects/legacy/music/musicSongsData.ts).

> **Not this channel?** There are two YouTube channels in this repo. `@jwolf1081` is the 2019–2020 music channel covered here. `@JWolfCrafter` is the 2012–2013 Minecraft channel — see [getJWolfCrafterYouTubeData](../getJWolfCrafterYouTubeData/SKILL.md).

The same 15 songs are also on SoundCloud. A full "update music data" request means running **both** this skill and [getSoundCloudData](../getSoundCloudData/SKILL.md), then bumping `MUSIC_STATS_AS_OF` once at the end.

The catalogue is archival — nothing new will be posted. **Only the per-song `youtube.views` / `youtube.likes` and `MUSIC_STATS_AS_OF` should change on a refresh.** `musicTotals` is derived at module load, so it needs no manual edit.

## Critical constraint: do not use `fetch` / `curl` / `Invoke-WebRequest`

`youtube.com` returns **HTTP 401** to plain HTTP clients. The page data lives in a `ytInitialData` / `ytInitialPlayerResponse` script blob that only materialises in a real browser engine anyway.

**You must use the integrated browser tools** (`open_browser_page`, `navigate_page`, `run_playwright_code`). If `open_browser_page` fails with `ERR_ABORTED`, retry once with `forceNew: true`.

Corollary for the app itself: live client-side fetching is not viable without a Google Cloud API key, which was deliberately rejected. This file is a committed snapshot on purpose.

## Constants

- Channel: `https://www.youtube.com/@jwolf1081`
- Channel ID: `UC33ATi_jQWqTnsmwdsPoNuQ`
- Videos tab: `https://www.youtube.com/@jwolf1081/videos`
- About tab: `https://www.youtube.com/@jwolf1081/about`

## Step 1 — Confirm the catalogue

```
open_browser_page → https://www.youtube.com/@jwolf1081/videos
```

All 15 uploads render in the first grid batch, so **no scrolling is needed**. The accessibility snapshot exposes `/watch?v=<id>`, the title and an `aria-label` view count per entry.

Pull the ids in one shot instead of parsing the snapshot by hand:

```js
return page.evaluate(() => {
  const s = JSON.stringify(window.ytInitialData ?? {});
  return [...new Set(s.match(/"videoId":"([^"]{11})"/g)?.map(m => m.slice(11, -1)) ?? [])];
});
```

A video count other than 15 means something went wrong with the scrape, not that content was added.

Do **not** take views from this grid: `Tammy Thompson` renders as `4.1K`. Only the watch pages give exact figures.

## Step 2 — Per-song views, likes and dates

Walk the watch pages. Split the ids into **two batches of ~8** — fifteen sequential loads in one `run_playwright_code` call will blow past the tool timeout.

```js
const ids = ['pTXBMrcx5qs','kJeHyI_OqXo','fOehDXStuHQ','MrzYqsG1hyo','AnHaGSM70lM','1mR-Xx7gwBA','qV2dkJyX-Ms','7EiED9uSWzU'];
const out = [];
for (const id of ids) {
  await page.goto('https://www.youtube.com/watch?v=' + id, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2500);
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
return JSON.stringify(out);
```

Pass a generous `timeoutMs` (≈240000) per batch.

Field mapping:

| Source | Target |
|---|---|
| `videoDetails.viewCount` | `youtube.views` |
| like button `accessibilityText` | `youtube.likes` |
| `playerMicroformatRenderer.publishDate` | `uploadedAt` (fixed — verify only) |

### Likes

YouTube hides the raw like count; the only exact figure is in the like button's accessibility label:

- `"like this video"` → **0 likes**
- `"like this video along with 1 other person"` → **1 like**
- `"like this video along with N other people"` → **N likes**

Do not use the visible button text — it is abbreviated and renders empty at 0.

### Dates

`publishDate` is a full ISO timestamp in the channel's local zone (US Pacific, `-08:00`/`-07:00`), e.g. `2020-05-14T01:38:33-07:00`. Truncate to `YYYY-MM-DD` — do **not** run it through `new Date()` first, which would shift evening uploads a day.

`Tammy Thompson` and `Feelings` share `2019-07-12` (23:31 and 23:11 respectively). The component's sort is stable, so the data file's newest-first order is what disambiguates them. Keep that order.

### Titles

`videoDetails.title` for `Halloween is Never Over  - Lo-Fi Hip Hop` carries a **double space** that the site itself collapses. The data file stores the single-spaced form. Titles are fixed for archival uploads — do not rewrite them on a refresh.

### Channel totals cross-check

The About tab's channel-wide view count is a useful sanity check on the per-song sum:

```js
await page.goto('https://www.youtube.com/@jwolf1081/about', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(3000);
return page.evaluate(() => {
  const s = JSON.stringify(window.ytInitialData ?? {});
  return (s.match(/"viewCountText":"([^"]+)"/) ?? [null, null])[1]; // e.g. "4,916 views"
});
```

Note `viewCountText` here is a bare string, **not** the `{ simpleText }` wrapper used elsewhere in the payload. It currently matches the sum of the 15 songs exactly (4,916). It is **not** stored in the data file — `musicTotals.youtubeViews` is derived from the song list. A mismatch is not automatically an error (YouTube counts deleted/unlisted activity channel-wide), but a large gap means re-check the scrape.

### Fallback

If the `ytInitialData` shape has drifted, the channel RSS feed carries titles, ids, publish dates and `media:statistics views` for the 15 most recent uploads (all 15 here):

```
https://www.youtube.com/feeds/videos.xml?channel_id=UC33ATi_jQWqTnsmwdsPoNuQ
```

It has no like counts, so `youtube.likes` still needs the watch pages.

## Step 3 — Thumbnails: skip

**Do nothing here.** All 15 thumbnails are already committed under `public/images/music/` and wired into `thumbnail`. They are frozen artwork on a dormant channel.

<details>
<summary>One-time thumbnail recovery (not part of a normal refresh)</summary>

`i.ytimg.com` is a plain CDN with no bot protection, so `curl.exe` works here (unlike youtube.com itself). Try resolutions in descending order — `maxresdefault` 404s on uploads that predate HD encoding:

```powershell
foreach ($variant in @('maxresdefault','sddefault','hqdefault')) {
  curl.exe -sf -A "Mozilla/5.0" -o $dest "https://i.ytimg.com/vi/$id/$variant.jpg"
  if ($LASTEXITCODE -eq 0 -and (Get-Item $dest).Length -gt 2000) { break }
}
```

The `-f` flag matters: without it curl writes YouTube's 404 placeholder to disk under a `.jpg` name that looks like a successful download. Validate afterwards — a truncated file still has a valid header:

```powershell
Get-ChildItem "public\images\music\*" | ForEach-Object {
  $b = [System.IO.File]::ReadAllBytes($_.FullName)
  $h = ($b[0..1] | ForEach-Object { $_.ToString('X2') }) -join ''
  $st = if ($h -eq 'FFD8' -and $b[-2] -eq 0xFF -and $b[-1] -eq 0xD9) { 'OK' } else { "BAD ($h)" }
  "{0,-50} {1,8} bytes  {2}" -f $_.Name, $b.Length, $st
}
```

File names are slugs of the **full YouTube title** (`halloween-is-never-over-lo-fi-hip-hop.jpg`), not video ids and not the shorter SoundCloud permalinks.

SoundCloud artwork is a square 500×500 crop and is deliberately **not** used — the cards want the 16:9 YouTube frame.

</details>

## Step 4 — Rewrite the data file

Update [musicSongsData.ts](../../../src/app/projects/legacy/music/musicSongsData.ts):

1. Set `MUSIC_STATS_AS_OF` to the current month and year, e.g. `"October 2026"`.
2. Update each song's `youtube.views` and `youtube.likes` in place, keeping newest-first order.
3. Change **only** those. Leave `id`, `title`, `uploadedAt`, `thumbnail`, `youtube.url` and the whole `soundcloud` block untouched.
4. Do not hand-edit `musicTotals` — it is computed from `musicSongsData` at module load.
5. Do not add fields beyond the `MusicSongData` interface.

## Step 5 — Verify

- `pnpm check`
- `git diff src/app/projects/legacy/music/musicSongsData.ts` — the diff must touch only `MUSIC_STATS_AS_OF` and `views` / `likes` lines inside `youtube` blocks.
