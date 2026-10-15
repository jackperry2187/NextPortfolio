---
name: getPMCData
description: "Use when refreshing the PlanetMinecraft (PMC) submission stats in src/app/projects/pmcProjectsData.ts — scrapes views, downloads, comments, diamonds, favorites, titles, subtitles and upload dates for the ShadowFlameSkull profile using the integrated browser, then rewrites the data file and bumps PMC_STATS_AS_OF. Trigger phrases: update PMC data, refresh PlanetMinecraft stats, re-scrape PMC, update legacy projects stats."
---

# getPMCData

Refreshes the stat numbers in [src/app/projects/pmcProjectsData.ts](../../../src/app/projects/pmcProjectsData.ts).

The 19 submissions are archival — nothing new will be posted and the artwork never changes. **Only the view/download/comment/diamond/favorite counts and `PMC_STATS_AS_OF` should change on a refresh.**

## Critical constraint: do not use `fetch` / `curl` / `Invoke-WebRequest`

PMC sits behind Cloudflare bot management. Every plain HTTP client returns **`403` with a "Just a moment..." interstitial — including `robots.txt`**. This was verified with both .NET's `HttpWebRequest` and `curl.exe`; the block is TLS-fingerprint based, so changing the User-Agent does **not** help.

**You must use the integrated browser tools** (`open_browser_page`, `navigate_page`, `run_playwright_code`). A real browser engine clears the challenge.

Corollary for the app itself: live client-side or serverless fetching of PMC is not viable. This file is a committed snapshot on purpose.

## Constants

- Profile: `https://www.planetminecraft.com/member/shadowflameskull/`
- Listing (newest first): `https://www.planetminecraft.com/member/shadowflameskull/submissions/?morder=order_latest`

## Step 1 — Open the listing

```
open_browser_page → https://www.planetminecraft.com/member/shadowflameskull/submissions/?morder=order_latest
```

Keep the returned `pageId` for every later call. All 19 submissions render on one page. The set is fixed — nothing new is being uploaded — so a count other than 19 means something went wrong with the scrape, not that content was added.

## Step 2 — Extract every card from the DOM

Each submission is an `li.resource.r-data`. Run via `run_playwright_code`:

```js
const data = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('li.resource.r-data')).map(li => {
    const stats = {};
    li.querySelectorAll('.r-stats i.material-icons').forEach(i => {
      const k = i.getAttribute('title'); // "views" | "downloads" | "comments"
      let n = i.nextElementSibling;
      while (n && n.tagName !== 'SPAN') n = n.nextElementSibling;
      if (k && n) stats[k] = n.textContent.trim();
    });
    const actions = {};
    li.querySelectorAll('.c-actions .c-action').forEach(a => {
      const cls = Array.from(a.classList).filter(c => c.startsWith('c-') && c !== 'c-action').join('|');
      const txt = a.textContent.replace(/\s+/g, ' ').trim();
      if (txt) actions[cls] = txt; // c-vote = diamonds, c-fav = favorites
    });
    return {
      subkey: li.getAttribute('data-subkey'),
      href: li.querySelector('a.r-title')?.getAttribute('href'),
      title: li.querySelector('a.r-title')?.textContent.trim(),
      subtitle: li.querySelector('.r-subject')?.textContent.replace(/\s+/g, ' ').trim(),
      dates: Array.from(li.querySelectorAll('abbr')).map(a => a.getAttribute('data-original-date')),
      stats, actions,
    };
  });
});
return JSON.stringify(data);
```

Field mapping:

| Source | Target |
|---|---|
| `a.r-title` text | `title` |
| `.r-subject` text | `subtitle` (e.g. `"Minecraft Skin"`) |
| `data-subkey` | `kind` (see mapping below) |
| `abbr[data-original-date]` | `uploadedAt` / `updatedAt` |
| `.r-stats i[title="views"] + span` | `stats.views` |
| `.r-stats i[title="downloads"] + span` | `stats.downloads` |
| `.r-stats i[title="comments"] + span` | `stats.comments` |
| `.c-action.c-vote` text | `stats.diamonds` |
| `.c-action.c-fav` text | `stats.favorites` |

Ignore `.r-preview img` — see step 4.

`data-subkey` → `kind`: `mods`→`mod`, `texture-packs`→`texture-pack`, `projects`→`map`, `skins`→`skin`, `blogs`→`blog`, `servers`→`server`.

### Dates

Use `data-original-date` (site-local US Eastern), **not** the `abbr` `title` attribute — the `title` is rendered in a different timezone and will be off by a day for late-evening posts.

- One `abbr` → that date is `uploadedAt`.
- Two `abbr`s → the **first** is the updated date, the **second** is the original post date. So `uploadedAt` = second, `updatedAt` = first.

Truncate to `YYYY-MM-DD`; the data file stores date-only.

### Zero values

PMC omits the icon/number entirely at zero rather than rendering `0`:
- No `comments` key → omit `comments` from the entry (the field is optional).
- No `c-fav` → `favorites: 0`.
- Blogs and servers have no download button → omit `downloads`.

## Step 3 — Resolve abbreviated numbers

The listing abbreviates anything ≥ 1000 (`5k`, `11k`, `4.2k`, `1k`). For **every** entry whose `views` or `downloads` matched `/[km]$/i`, open its project page and hover the stat to reveal the exact figure in the tooltip (`5k` → `5,014 views`).

```js
const urls = [/* relative hrefs needing exact numbers */];
const out = [];
for (const u of urls) {
  await page.goto('https://www.planetminecraft.com' + u, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('ul.resource-statistics li', { timeout: 30000 });
  const n = await page.locator('ul.resource-statistics li').count();
  const tips = [];
  for (let i = 0; i < n; i++) {
    await page.locator('ul.resource-statistics li').nth(i).hover();
    await page.waitForTimeout(900);
    tips.push(await page.evaluate(() =>
      Array.from(document.querySelectorAll('.tipso_bubble'))
        .filter(e => e.offsetParent !== null)
        .map(e => e.textContent.replace(/\s+/g, ' ').trim()).join(' || ')));
  }
  out.push({ u, tips });
}
return JSON.stringify(out, null, 1);
```

Pass a generous `timeoutMs` (≈180000) to `run_playwright_code` — the pages load slowly because of ad scripts. Strip commas when writing numbers into the file.

## Step 4 — Preview images: skip

**Do nothing here.** All 16 preview images are already committed under `public/images/pmc/` and wired into `backgroundImage`. They are static artwork on long-dead submissions — they never change, and no new submissions are coming. Leave the files and the `backgroundImage` values exactly as they are.

(The 3 blogs have no preview on PMC and correctly have no `backgroundImage`.)

Only if a file is actually missing or corrupt, expand the recovery notes below.

<details>
<summary>One-time image recovery (not part of a normal refresh)</summary>

Validate first — magic bytes alone are not enough, since a truncated file still has a valid header:

```powershell
Get-ChildItem "public\images\pmc\*" | ForEach-Object {
  $b = [System.IO.File]::ReadAllBytes($_.FullName)
  $h = ($b[0..3] | ForEach-Object { $_.ToString('X2') }) -join ''
  if ($h -eq '52494646') {
    $d = [BitConverter]::ToUInt32($b, 4) + 8
    $st = if ($b.Length -eq $d) { 'OK' } else { "TRUNCATED (have $($b.Length), need $d)" }
    "{0,-34} WEBP {1}" -f $_.Name, $st
  } elseif ($h.StartsWith('FFD8')) {
    $st = if ($b[-2] -eq 0xFF -and $b[-1] -eq 0xD9) { 'OK' } else { 'TRUNCATED (no EOI)' }
    "{0,-34} JPEG {1}" -f $_.Name, $st
  } else { "{0,-34} BAD HEADER {1}" -f $_.Name, $h }
}
```

Source URL comes from `.r-preview img[src]` on the listing. The CDN splits by path:

- **`screenshot/...`** (mods, texture packs, maps, servers) — `curl.exe -s -A "Mozilla/5.0" -o "public\images\pmc\<id>.jpg" "<src>"` works.
- **`preview/...`** (skins) — Cloudflare-blocked. `curl` returns a 403 HTML page saved under a `.jpg` name that looks like a successful download. User-Agent, `Referer` and `Accept` headers do not help; the block is TLS-fingerprint based, and `page.context().request` is unavailable in the integrated browser (`Storage.getCookies` not implemented).

For `preview/...`, navigate to the image and re-encode via canvas — navigating directly makes the page origin match the image origin, so the canvas is not tainted. Save as `.webp` (PMC content-negotiates to WebP despite the `.jpg` URL):

```js
await page.goto(imageUrl, { timeout: 60000 });
const b64 = await page.evaluate(async () => {
  const img = document.images[0];
  if (!img.complete) await new Promise(r => { img.onload = r; img.onerror = r; });
  if (!img.naturalWidth) return null;          // 403'd — retry this one
  const scale = Math.min(1, 192 / img.naturalWidth);
  const c = document.createElement('canvas');
  c.width = Math.round(img.naturalWidth * scale);
  c.height = Math.round(img.naturalHeight * scale);
  c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
  return c.toDataURL('image/webp', 0.6).split(',')[1];
});
```

Batch ~3 per call so the result spills to a tool-result file, then let PowerShell decode that file directly:

```powershell
$r = Get-Content $resultFile -Raw
$obj = ($r.Substring(8).Trim() | ConvertFrom-Json) | ConvertFrom-Json
$obj.PSObject.Properties | ForEach-Object {
  [IO.File]::WriteAllBytes("$PWD\public\images\pmc\$($_.Name).webp", [Convert]::FromBase64String($_.Value))
}
```

Never hand-copy base64 out of a tool result into a command — one dropped character silently truncates the file and the image decodes to nothing. Re-run the validator afterwards.

</details>

## Step 5 — Rewrite the data file

Update [src/app/projects/pmcProjectsData.ts](../../../src/app/projects/pmcProjectsData.ts):

1. Set `PMC_STATS_AS_OF` to the current month and year, e.g. `"October 2026"`.
2. Update the `stats` numbers in place, keeping newest-first order.
3. Change **only** `PMC_STATS_AS_OF` and `stats`. Leave `id`, `title`, `subtitle`, `kind`, `url`, `uploadedAt`, `updatedAt` and `backgroundImage` untouched — the submissions are archival and those fields are fixed.
4. Do not add fields beyond the `PmcProjectData` interface.

## Step 6 — Verify

- Check the file for type errors.
- Confirm all 19 entries are still present and that `git diff` touches only `PMC_STATS_AS_OF` and `stats` values. Any other change is a mistake.
- Report a table of changed stats (old → new) so the user can sanity-check before committing.
