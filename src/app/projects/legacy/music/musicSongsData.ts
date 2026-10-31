// Songs released as JWolf, cross-posted to YouTube and SoundCloud.
// Stats scraped from both profiles — see MUSIC_STATS_AS_OF.
// Titles and upload dates come from YouTube when the two platforms disagree.

export const MUSIC_YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@jwolf1081";

export const MUSIC_YOUTUBE_CHANNEL_HANDLE = "@jwolf1081";

export const MUSIC_YOUTUBE_CHANNEL_ID = "UC33ATi_jQWqTnsmwdsPoNuQ";

export const MUSIC_SOUNDCLOUD_PROFILE_URL = "https://soundcloud.com/jwolf02";

export const MUSIC_SOUNDCLOUD_HANDLE = "jwolf02";

export const MUSIC_STATS_AS_OF = "October 2026";

export interface MusicYouTubeStats {
  url: string;
  views: number;
  likes: number;
}

export interface MusicSoundCloudStats {
  url: string;
  listens: number;
  likes: number;
}

export interface MusicSongData {
  /** YouTube video id, e.g. "pTXBMrcx5qs". */
  id: string;
  /** Title as YouTube shows it. */
  title: string;
  /** YouTube publish date (YYYY-MM-DD), channel-local (US Pacific). */
  uploadedAt: string;
  /** Local copy of the YouTube thumbnail. */
  thumbnail: string;
  youtube: MusicYouTubeStats;
  soundcloud: MusicSoundCloudStats;
}

/** Newest first, matching the order shown on the channel's Videos tab. */
export const musicSongsData: MusicSongData[] = [
  {
    id: "pTXBMrcx5qs",
    title: "One Conversation",
    uploadedAt: "2020-05-14",
    thumbnail: "/images/music/one-conversation.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=pTXBMrcx5qs",
      views: 81,
      likes: 1,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/one-conversation",
      listens: 21,
      likes: 2,
    },
  },
  {
    id: "kJeHyI_OqXo",
    title: "Panda",
    uploadedAt: "2020-03-17",
    thumbnail: "/images/music/panda.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=kJeHyI_OqXo",
      views: 59,
      likes: 2,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/panda",
      listens: 10,
      likes: 0,
    },
  },
  {
    id: "fOehDXStuHQ",
    title: "Fades",
    uploadedAt: "2020-03-11",
    thumbnail: "/images/music/fades.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=fOehDXStuHQ",
      views: 41,
      likes: 2,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/fades",
      listens: 15,
      likes: 3,
    },
  },
  {
    id: "MrzYqsG1hyo",
    title: "Save Me",
    uploadedAt: "2020-03-01",
    thumbnail: "/images/music/save-me.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=MrzYqsG1hyo",
      views: 43,
      likes: 0,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/save-me",
      listens: 3,
      likes: 1,
    },
  },
  {
    id: "AnHaGSM70lM",
    title: "Many Years Ago",
    uploadedAt: "2020-02-19",
    thumbnail: "/images/music/many-years-ago.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=AnHaGSM70lM",
      views: 65,
      likes: 3,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/many-years-ago",
      listens: 11,
      likes: 2,
    },
  },
  {
    id: "1mR-Xx7gwBA",
    title: "Galactic Christmas",
    uploadedAt: "2019-12-25",
    thumbnail: "/images/music/galactic-christmas.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=1mR-Xx7gwBA",
      views: 34,
      likes: 0,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/galactic-christmas",
      listens: 10,
      likes: 1,
    },
  },
  {
    id: "qV2dkJyX-Ms",
    title: "Anniversary",
    uploadedAt: "2019-12-09",
    thumbnail: "/images/music/anniversary.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=qV2dkJyX-Ms",
      views: 34,
      likes: 1,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/anniversary",
      listens: 28,
      likes: 1,
    },
  },
  {
    id: "7EiED9uSWzU",
    title: "Player 2",
    uploadedAt: "2019-12-05",
    thumbnail: "/images/music/player-2.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=7EiED9uSWzU",
      views: 22,
      likes: 1,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/player-2",
      listens: 6,
      likes: 2,
    },
  },
  {
    id: "bhTdLdxO30Y",
    title: "I'll Be There Next Time",
    uploadedAt: "2019-12-01",
    thumbnail: "/images/music/ill-be-there-next-time.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=bhTdLdxO30Y",
      views: 46,
      likes: 2,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/ill-be-there-next-time",
      listens: 92,
      likes: 4,
    },
  },
  {
    id: "JqOTj9PDwIo",
    title: "Asleep On A Beach",
    uploadedAt: "2019-11-10",
    thumbnail: "/images/music/asleep-on-a-beach.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=JqOTj9PDwIo",
      views: 22,
      likes: 1,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/asleep-on-a-beach",
      listens: 111,
      likes: 0,
    },
  },
  {
    id: "IsvDYDkzBxE",
    title: "Halloween is Never Over - Lo-Fi Hip Hop",
    uploadedAt: "2019-11-02",
    thumbnail: "/images/music/halloween-is-never-over-lo-fi-hip-hop.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=IsvDYDkzBxE",
      views: 49,
      likes: 1,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/halloween-is-never-over",
      listens: 2,
      likes: 0,
    },
  },
  {
    id: "qSePwMoOybo",
    title: "You Chose Space Over Me - Lo-Fi Hip Hop",
    uploadedAt: "2019-07-15",
    thumbnail: "/images/music/you-chose-space-over-me-lo-fi-hip-hop.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=qSePwMoOybo",
      views: 64,
      likes: 1,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/you-chose-space-over-me-lo-fi-hip-hop",
      listens: 29,
      likes: 5,
    },
  },
  {
    id: "IhCotDTjIDo",
    title: "Space Thunderstorm - Lo-Fi Hip Hop",
    uploadedAt: "2019-07-14",
    thumbnail: "/images/music/space-thunderstorm-lo-fi-hip-hop.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=IhCotDTjIDo",
      views: 98,
      likes: 3,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/space-thunderstorm-lo-fi-hip-hop",
      listens: 55,
      likes: 5,
    },
  },
  {
    id: "xWtaJgzCiVs",
    title: "Tammy Thompson - Stranger Things Lo-Fi Hip Hop",
    uploadedAt: "2019-07-12",
    thumbnail: "/images/music/tammy-thompson-stranger-things-lo-fi-hip-hop.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=xWtaJgzCiVs",
      views: 4147,
      likes: 76,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/tammy-thompson",
      listens: 337,
      likes: 11,
    },
  },
  {
    id: "3Da1DXSvpEk",
    title: "Feelings - Stranger Things Lo-Fi Remix",
    uploadedAt: "2019-07-12",
    thumbnail: "/images/music/feelings-stranger-things-lo-fi-remix.jpg",
    youtube: {
      url: "https://www.youtube.com/watch?v=3Da1DXSvpEk",
      views: 111,
      likes: 4,
    },
    soundcloud: {
      url: "https://soundcloud.com/jwolf02/feelings-stranger-things-lo-fi-remix",
      listens: 57,
      likes: 2,
    },
  },
];

export interface MusicTotals {
  uploads: number;
  youtubeViews: number;
  youtubeLikes: number;
  soundcloudListens: number;
  soundcloudLikes: number;
}

export const musicTotals: MusicTotals = musicSongsData.reduce<MusicTotals>(
  (totals, song) => ({
    uploads: totals.uploads + 1,
    youtubeViews: totals.youtubeViews + song.youtube.views,
    youtubeLikes: totals.youtubeLikes + song.youtube.likes,
    soundcloudListens: totals.soundcloudListens + song.soundcloud.listens,
    soundcloudLikes: totals.soundcloudLikes + song.soundcloud.likes,
  }),
  {
    uploads: 0,
    youtubeViews: 0,
    youtubeLikes: 0,
    soundcloudListens: 0,
    soundcloudLikes: 0,
  },
);
