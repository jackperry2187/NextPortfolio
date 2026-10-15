// PlanetMinecraft submissions by ShadowFlameSkull.
// Stats scraped from the member submissions page + per-project stat tooltips.
// Snapshot taken October 2026 — see PMC_STATS_AS_OF.

export const PMC_PROFILE_URL =
  "https://www.planetminecraft.com/member/shadowflameskull/";

export const PMC_USERNAME = "ShadowFlameSkull";

export const PMC_STATS_AS_OF = "October 2026";

export type PmcSubmissionKind =
  | "mod"
  | "texture-pack"
  | "map"
  | "skin"
  | "blog"
  | "server";

export interface PmcStats {
  views: number;
  /** Absent for blogs and servers, which have no download. */
  downloads?: number;
  /** Absent when zero — PMC omits the comment icon entirely at 0. */
  comments?: number;
  diamonds: number;
  favorites: number;
}

export interface PmcProjectData {
  id: string;
  kind: PmcSubmissionKind;
  /** e.g. "A Very Generic Einstein" */
  title: string;
  /** e.g. "Minecraft Skin" */
  subtitle: string;
  url: string;
  /** Local copy of the PMC preview image. Absent for the blogs, which have none. */
  backgroundImage?: string;
  /** Original post date (YYYY-MM-DD), site-local (US Eastern). */
  uploadedAt: string;
  /** Only present when the submission was edited after posting. */
  updatedAt?: string;
  stats: PmcStats;
}

/** Newest first, matching the order shown on the PMC profile. */
export const pmcProjectsData: PmcProjectData[] = [
  {
    id: "redstone-arsenal",
    kind: "mod",
    title: "Redstone Arsenal [1.12.2] NEW RELEASE!",
    subtitle: "Minecraft 1.12.2 Functional Mod",
    url: "https://www.planetminecraft.com/mod/redstone-arsenal-1-12-2-new-release/",
    backgroundImage: "/images/pmc/redstone-arsenal.jpg",
    uploadedAt: "2018-03-14",
    stats: { views: 5014, downloads: 566, diamonds: 5, favorites: 5 },
  },
  {
    id: "a-very-generic-einstein",
    kind: "skin",
    title: "A Very Generic Einstein",
    subtitle: "Minecraft Skin",
    url: "https://www.planetminecraft.com/skin/a-very-generic-einstein/",
    backgroundImage: "/images/pmc/a-very-generic-einstein.webp",
    uploadedAt: "2016-04-12",
    stats: { views: 306, downloads: 12, diamonds: 1, favorites: 0 },
  },
  {
    id: "better-woods-pack",
    kind: "texture-pack",
    title: "Better woods pack!",
    subtitle: "32x Minecraft 1.8 Simplistic Texture Pack",
    url: "https://www.planetminecraft.com/texture-pack/better-woods-pack/",
    backgroundImage: "/images/pmc/better-woods-pack.jpg",
    uploadedAt: "2014-09-01",
    stats: { views: 4268, downloads: 175, comments: 12, diamonds: 5, favorites: 0 },
  },
  {
    id: "better-flowers-pack",
    kind: "texture-pack",
    title: "Better flowers pack!",
    subtitle: "32x Minecraft 1.8 Realistic Texture Pack",
    url: "https://www.planetminecraft.com/texture-pack/better-flowers-pack/",
    backgroundImage: "/images/pmc/better-flowers-pack.jpg",
    uploadedAt: "2014-08-30",
    stats: { views: 11096, downloads: 338, comments: 25, diamonds: 7, favorites: 4 },
  },
  {
    id: "sky-factory-the-easy-way",
    kind: "map",
    title: "Sky Factory: The Easy Way",
    subtitle: "Challenge / Adventure Map",
    url: "https://www.planetminecraft.com/project/sky-factory-the-easy-way/",
    backgroundImage: "/images/pmc/sky-factory-the-easy-way.jpg",
    uploadedAt: "2014-08-14",
    stats: { views: 9838, downloads: 1009, diamonds: 2, favorites: 0 },
  },
  {
    id: "half-circle-house",
    kind: "map",
    title: "Half-Circle House",
    subtitle: "Land Structure Map",
    url: "https://www.planetminecraft.com/project/half-circle-house/",
    backgroundImage: "/images/pmc/half-circle-house.jpg",
    uploadedAt: "2014-06-26",
    stats: { views: 751, downloads: 3, diamonds: 1, favorites: 0 },
  },
  {
    id: "creative-builds-pixel-art",
    kind: "map",
    title: "Creative Builds - Pixel Art",
    subtitle: "3D Art Map",
    url: "https://www.planetminecraft.com/project/creative-builds---pixel-art/",
    backgroundImage: "/images/pmc/creative-builds-pixel-art.jpg",
    uploadedAt: "2014-06-21",
    updatedAt: "2014-06-22",
    stats: { views: 3078, downloads: 100, diamonds: 1, favorites: 0 },
  },
  {
    id: "cyber-steve",
    kind: "skin",
    title: "Cyber-Steve",
    subtitle: "Minecraft Skin",
    url: "https://www.planetminecraft.com/skin/cyber-steve-2911539/",
    backgroundImage: "/images/pmc/cyber-steve.webp",
    uploadedAt: "2014-05-24",
    stats: { views: 321, downloads: 15, diamonds: 1, favorites: 0 },
  },
  {
    id: "skinedit-newbs-guide",
    kind: "blog",
    title: "SkinEdit - A Newb's Guide to Making a Skin",
    subtitle: "Tutorial Blog",
    url: "https://www.planetminecraft.com/blog/skinedit---a-newbs-guide-to-making-a-skin/",
    uploadedAt: "2014-05-04",
    stats: { views: 396, diamonds: 1, favorites: 0 },
  },
  {
    id: "server-costs-newbs-guide",
    kind: "blog",
    title: "Server Costs - A Newb's Guide To Making a Server",
    subtitle: "Tutorial Blog",
    url: "https://www.planetminecraft.com/blog/server-costs---a-newbs-guide-to-making-a-server/",
    uploadedAt: "2014-05-03",
    stats: { views: 539, comments: 16, diamonds: 1, favorites: 0 },
  },
  {
    id: "that-creepy-plastic-doll",
    kind: "skin",
    title: "That Creepy Plastic Doll",
    subtitle: "Minecraft Skin",
    url: "https://www.planetminecraft.com/skin/that-creepy-plastic-doll/",
    backgroundImage: "/images/pmc/that-creepy-plastic-doll.webp",
    uploadedAt: "2014-04-26",
    stats: { views: 337, downloads: 3, comments: 3, diamonds: 2, favorites: 0 },
  },
  {
    id: "the-islands-of-survival",
    kind: "map",
    title: "The Islands Of Survival",
    subtitle: "Challenge / Adventure Map",
    url: "https://www.planetminecraft.com/project/the-islands-of-survival-2843031/",
    backgroundImage: "/images/pmc/the-islands-of-survival.jpg",
    uploadedAt: "2014-04-07",
    stats: { views: 554, downloads: 32, comments: 3, diamonds: 1, favorites: 0 },
  },
  {
    id: "chimneyswift-hoodie-gamer",
    kind: "skin",
    title: "ChimneySwift Hoodie Gamer",
    subtitle: "Minecraft Skin",
    url: "https://www.planetminecraft.com/skin/chimneyswift-hoodie-gamer/",
    backgroundImage: "/images/pmc/chimneyswift-hoodie-gamer.webp",
    uploadedAt: "2014-02-01",
    stats: { views: 278, downloads: 6, diamonds: 1, favorites: 0 },
  },
  {
    id: "little-kid-with-a-big-head",
    kind: "skin",
    title: "Little Kid With A Big Head",
    subtitle: "Minecraft Skin",
    url: "https://www.planetminecraft.com/skin/little-kid-with-a-big-head/",
    backgroundImage: "/images/pmc/little-kid-with-a-big-head.webp",
    uploadedAt: "2014-01-26",
    stats: { views: 307, downloads: 9, diamonds: 1, favorites: 0 },
  },
  {
    id: "emo-haired-office-worker",
    kind: "skin",
    title: "[NEW] Emo-Haired Office Worker",
    subtitle: "Minecraft Skin",
    url: "https://www.planetminecraft.com/skin/new-emo-haired-office-worker/",
    backgroundImage: "/images/pmc/emo-haired-office-worker.webp",
    uploadedAt: "2014-01-24",
    stats: { views: 200, downloads: 5, diamonds: 1, favorites: 0 },
  },
  {
    id: "shadow-craft",
    kind: "server",
    title: "Shadow Craft",
    subtitle: "1.7.2 Survival Server",
    url: "https://www.planetminecraft.com/server/shadow-craft-2642578/",
    backgroundImage: "/images/pmc/shadow-craft.jpg",
    uploadedAt: "2013-12-23",
    stats: { views: 203, diamonds: 2, favorites: 0 },
  },
  {
    id: "insta-mod-installer",
    kind: "blog",
    title: "Things That Should Be Added To Minecraft #1 : An Insta-Mod Installer",
    subtitle: "Review Blog",
    url: "https://www.planetminecraft.com/blog/things-that-should-be-added-to-minecraft-1-an-insta-mod-installer/",
    uploadedAt: "2013-12-16",
    stats: { views: 356, diamonds: 1, favorites: 0 },
  },
  {
    id: "smooth-resource-pack-2",
    kind: "texture-pack",
    title: "Smooth Resource Pack 2.0",
    subtitle: "16x Minecraft 1.7.2 Simplistic Texture Pack",
    url: "https://www.planetminecraft.com/texture-pack/smooth-pack-2614481/",
    backgroundImage: "/images/pmc/smooth-resource-pack-2.jpg",
    uploadedAt: "2013-12-01",
    stats: { views: 4728, downloads: 569, comments: 14, diamonds: 3, favorites: 2 },
  },
  {
    id: "the-gui-texture-pack",
    kind: "texture-pack",
    title: "The GUI Texture Pack",
    subtitle: "64x Minecraft 1.7.2 Simplistic Texture Pack",
    url: "https://www.planetminecraft.com/texture-pack/the-gui-texture-pack-resolution-unknown/",
    backgroundImage: "/images/pmc/the-gui-texture-pack.jpg",
    uploadedAt: "2013-12-01",
    stats: { views: 4055, downloads: 363, comments: 1, diamonds: 2, favorites: 0 },
  },
];
