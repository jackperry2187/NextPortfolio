// YouTube uploads on the JWolfCrafter channel.
// Stats scraped from the channel's Videos tab + per-video watch pages.
// Snapshot taken October 2026 — see YOUTUBE_STATS_AS_OF.

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@JWolfCrafter";

export const YOUTUBE_CHANNEL_HANDLE = "@JWolfCrafter";

export const YOUTUBE_CHANNEL_ID = "UC8N11PeK9C2gOzFuPC-h01w";

export const YOUTUBE_STATS_AS_OF = "October 2026";

export interface YouTubeChannelStats {
  subscribers: number;
  /** Channel-wide total reported by YouTube, not a sum of the videos below. */
  totalViews: number;
  videoCount: number;
}

export const youtubeChannelStats: YouTubeChannelStats = {
  subscribers: 17,
  totalViews: 296,
  videoCount: 6,
};

export interface YouTubeVideoStats {
  views: number;
  likes: number;
}

export interface YouTubeVideoData {
  /** YouTube video id, e.g. "rtnnmo-vw6Y". */
  id: string;
  title: string;
  url: string;
  /** Local copy of the video thumbnail. */
  thumbnail: string;
  /** Runtime as YouTube displays it, e.g. "7:20". */
  duration: string;
  /** Publish date (YYYY-MM-DD), channel-local (US Pacific). */
  uploadedAt: string;
  stats: YouTubeVideoStats;
}

/** Newest first, matching the order shown on the channel's Videos tab. */
export const youtubeVideosData: YouTubeVideoData[] = [
  {
    id: "rtnnmo-vw6Y",
    title: "Skyblock Survival Ep. 5",
    url: "https://www.youtube.com/watch?v=rtnnmo-vw6Y",
    thumbnail: "/images/youtube/skyblock-survival-ep-5.jpg",
    duration: "7:20",
    uploadedAt: "2013-03-05",
    stats: { views: 70, likes: 0 },
  },
  {
    id: "ey3rcpU1WPg",
    title: "Skyblock Survival Ep. 4",
    url: "https://www.youtube.com/watch?v=ey3rcpU1WPg",
    thumbnail: "/images/youtube/skyblock-survival-ep-4.jpg",
    duration: "16:03",
    uploadedAt: "2013-03-05",
    stats: { views: 27, likes: 0 },
  },
  {
    id: "rdH5y17veLs",
    title: "Skyblock Survival Ep. 2",
    url: "https://www.youtube.com/watch?v=rdH5y17veLs",
    thumbnail: "/images/youtube/skyblock-survival-ep-2.jpg",
    duration: "18:15",
    uploadedAt: "2013-03-05",
    stats: { views: 19, likes: 0 },
  },
  {
    id: "tUsKRfRMvc4",
    title: "Skyblock Survival Ep. 3",
    url: "https://www.youtube.com/watch?v=tUsKRfRMvc4",
    thumbnail: "/images/youtube/skyblock-survival-ep-3.jpg",
    duration: "0:22",
    uploadedAt: "2013-03-04",
    stats: { views: 32, likes: 0 },
  },
  {
    id: "OwoPsjo8_N8",
    title: "Skyblock Survival Ep. 1",
    url: "https://www.youtube.com/watch?v=OwoPsjo8_N8",
    thumbnail: "/images/youtube/skyblock-survival-ep-1.jpg",
    duration: "14:15",
    uploadedAt: "2013-03-04",
    stats: { views: 88, likes: 1 },
  },
  {
    id: "H-VGI_-0YZY",
    title: "a minecraft short",
    url: "https://www.youtube.com/watch?v=H-VGI_-0YZY",
    thumbnail: "/images/youtube/a-minecraft-short.jpg",
    duration: "0:27",
    uploadedAt: "2012-07-10",
    stats: { views: 60, likes: 1 },
  },
];
