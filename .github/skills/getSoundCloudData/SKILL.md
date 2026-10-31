---
name: getSoundCloudData
description: "Use when refreshing the SoundCloud half of src/app/projects/legacy/music/musicSongsData.ts — scrapes per-track play and like counts for the JWolf profile (soundcloud.com/jwolf02) using the integrated browser, then rewrites the `soundcloud` blocks and bumps MUSIC_STATS_AS_OF. Trigger phrases: update SoundCloud data, refresh SoundCloud stats, re-scrape SoundCloud, update JWolf listens, update music data, update legacy projects stats."
---

# getSoundCloudData

Refreshes the `soundcloud` stats in [musicSongsData.ts](../../../src/app/projects/legacy/music/musicSongsData.ts).

The same 15 songs are also on YouTube. A full "update music data" request means running **both** this skill and [getJWolfYouTubeData](../getJWolfYouTubeData/SKILL.md), then bumping `MUSIC_STATS_AS_OF` once at the end.

The catalogue is archival — nothing new will be posted. **Only the per-song `soundcloud.listens` / `soundcloud.likes` and `MUSIC_STATS_AS_OF` should change on a refresh.** `musicTotals` is derived at module load, so it needs no manual edit.

## Critical constraint: use the integrated browser

The track list is rendered client-side and lazy-loaded, so plain HTTP clients get an empty shell. The unauthenticated `api-v2.soundcloud.com` endpoints need a rotating `client_id` that is only obtainable by sniffing the app bundle — not worth it for 15 tracks.

**Use the integrated browser tools** (`open_browser_page`, `navigate_page`, `run_playwright_code`).

## Constants

- Profile: `https://soundcloud.com/jwolf02`
- Tracks tab: `https://soundcloud.com/jwolf02/tracks`

## Step 1 — Load and fully scroll the tracks tab

The list virtualises; without scrolling only the first handful of `li.soundList__item` nodes exist.

```js
await page.goto('https://soundcloud.com/jwolf02/tracks', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(4000);
for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, 3000); await page.waitForTimeout(1200); }
return page.evaluate(() => document.querySelectorAll('li.soundList__item').length);
```

Expect **15**. A different count means the scroll did not finish — scroll more before scraping. Do not proceed on a short list.

### Why not `window.__sc_hydration`

The profile page's hydration payload only carries `anonymousId`, `features`, `geoip`, `privacySettings`, `statsigClientInitializeResponse`, `trackingBrowserTabId`, `apiClient` and `user`. **There is no track array in it.** Scrape the DOM; do not waste a call re-checking.

## Step 2 — Plays, likes, permalinks and dates in one pass

```js
return page.evaluate(() => JSON.stringify(
  [...document.querySelectorAll('li.soundList__item')].map(el => {
    const a = el.querySelector('a.soundTitle__title');
    const plays = [...el.querySelectorAll('.sc-ministats-item')]
      .map(s => s.getAttribute('title'))
      .find(t => t?.includes('play'));
    const like = el.querySelector('button.sc-button-like');
    return {
      href: a?.getAttribute('href'),
      title: a?.innerText?.trim(),
      postedAt: el.querySelector('time')?.getAttribute('datetime'),
      plays,                                  // e.g. "337 plays"
      likes: like?.innerText?.trim() || '0',  // empty string means 0
    };
  })
));
```

Field mapping:

| Source | Target |
|---|---|
| `.sc-ministats-item[title$=" plays"]` | `soundcloud.listens` |
| `button.sc-button-like` text | `soundcloud.likes` |
| `a.soundTitle__title` href | `soundcloud.url` (fixed — verify only) |

### Gotchas

- **The `title` attribute is the exact number.** The visible `.sc-ministats` text abbreviates at 1K+. Strip commas and ` plays`/` play`.
- **Each item can carry more than one `.sc-ministats-item`.** Tracks with comments also expose a `"N comments"` stat. Filter on `plays`, do not take `[0]` blindly.
- **An empty like button means zero, not missing.** SoundCloud renders no number at 0 (`Panda`, `Asleep On A Beach` and `Halloween Is Never Over` are currently 0). Treat `""` as `0`; never write `null`.
- **Do not take titles or dates from SoundCloud.** The data file favours YouTube for both, and they genuinely differ:
  | SoundCloud | YouTube (authoritative) |
  |---|---|
  | `Tammy Thompson - Lo-Fi Hip Hop` | `Tammy Thompson - Stranger Things Lo-Fi Hip Hop` |
  | `Halloween Is Never Over` | `Halloween is Never Over - Lo-Fi Hip Hop` |

  `<time datetime>` is UTC, so SoundCloud dates also land a day later than YouTube's Pacific-local dates on evening posts. Use the scraped date only to confirm you matched the right track.
- **SoundCloud permalinks are not the YouTube title slugs.** They are stable; match tracks to songs by permalink, not by title string equality.

### Permalink → song id map

| SoundCloud permalink | YouTube id | Title (YouTube) |
|---|---|---|
| `one-conversation` | `pTXBMrcx5qs` | One Conversation |
| `panda` | `kJeHyI_OqXo` | Panda |
| `fades` | `fOehDXStuHQ` | Fades |
| `save-me` | `MrzYqsG1hyo` | Save Me |
| `many-years-ago` | `AnHaGSM70lM` | Many Years Ago |
| `galactic-christmas` | `1mR-Xx7gwBA` | Galactic Christmas |
| `anniversary` | `qV2dkJyX-Ms` | Anniversary |
| `player-2` | `7EiED9uSWzU` | Player 2 |
| `ill-be-there-next-time` | `bhTdLdxO30Y` | I'll Be There Next Time |
| `asleep-on-a-beach` | `JqOTj9PDwIo` | Asleep On A Beach |
| `halloween-is-never-over` | `IsvDYDkzBxE` | Halloween is Never Over - Lo-Fi Hip Hop |
| `you-chose-space-over-me-lo-fi-hip-hop` | `qSePwMoOybo` | You Chose Space Over Me - Lo-Fi Hip Hop |
| `space-thunderstorm-lo-fi-hip-hop` | `IhCotDTjIDo` | Space Thunderstorm - Lo-Fi Hip Hop |
| `tammy-thompson` | `xWtaJgzCiVs` | Tammy Thompson - Stranger Things Lo-Fi Hip Hop |
| `feelings-stranger-things-lo-fi-remix` | `3Da1DXSvpEk` | Feelings - Stranger Things Lo-Fi Remix |

### Fallback

If the `soundList` markup has drifted, each individual track page (`https://soundcloud.com/jwolf02/<permalink>`) **does** hydrate a `sound` entry with exact `playback_count` and `likes_count`:

```js
return page.evaluate(() => {
  const s = (window.__sc_hydration ?? []).find(x => x.hydratable === 'sound')?.data ?? {};
  return { plays: s.playback_count, likes: s.likes_count };
});
```

That is 15 sequential page loads, so only fall back to it if the list scrape fails.

## Step 3 — Artwork: skip

**Do nothing here.** The cards use the YouTube thumbnails committed under `public/images/music/`. SoundCloud artwork is a square 500×500 crop (`i1.sndcdn.com/artworks-*-t500x500.jpg`) and is deliberately unused.

## Step 4 — Rewrite the data file

Update [musicSongsData.ts](../../../src/app/projects/legacy/music/musicSongsData.ts):

1. Set `MUSIC_STATS_AS_OF` to the current month and year, e.g. `"October 2026"`.
2. Update each song's `soundcloud.listens` and `soundcloud.likes` in place, keeping newest-first order.
3. Change **only** those. Leave `id`, `title`, `uploadedAt`, `thumbnail`, `soundcloud.url` and the whole `youtube` block untouched.
4. Do not hand-edit `musicTotals` — it is computed from `musicSongsData` at module load.
5. Do not add fields beyond the `MusicSongData` interface.

## Step 5 — Verify

- `pnpm check`
- `git diff src/app/projects/legacy/music/musicSongsData.ts` — the diff must touch only `MUSIC_STATS_AS_OF` and `listens` / `likes` lines inside `soundcloud` blocks.
