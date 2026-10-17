import type { BaseProjectData } from "../types";

export type CurseforgeStatKey = "GRDownloads" | "EfDownloads" | "EpDownloads";
export type ModrinthStatKey =
  | "GRDownloads"
  | "EfDownloads"
  | "EpDownloads"
  | "GRFollowers"
  | "EfFollowers"
  | "EpFollowers";

export interface ModStatKeys {
  curseforgeDownloadsKey: CurseforgeStatKey;
  modrinthDownloadsKey: ModrinthStatKey;
  modrinthFollowersKey: ModrinthStatKey;
}

export interface ModProjectData extends BaseProjectData {
  type: "mod";
  backgroundImage?: string;
  modLinks: {
    curseforgePagePath: string;
    modrinthPagePath: string;
  };
  statKeys: ModStatKeys;
}

export const moddingProjectsData: ModProjectData[] = [
  {
    id: "gentle-reminders",
    type: "mod",
    title: "Gentle Reminders",
    backgroundImage: "/images/gr_image.png",
    modLinks: {
      curseforgePagePath: "minecraft/mc-mods/gentlereminders",
      modrinthPagePath: "mod/gentlereminders",
    },
    statKeys: {
      curseforgeDownloadsKey: "GRDownloads",
      modrinthDownloadsKey: "GRDownloads",
      modrinthFollowersKey: "GRFollowers",
    },
    githubHref: "https://github.com/jackperry2187/GentleReminders",
    description:
      "Gentle Reminders is a Minecraft mod that sends mindful messages to the player every so often based on a customizable config file.",
    skills: [
      { id: "GRBackend", skills: ["Fabric", "NeoForge", "Gradle", "Java", "Java NIO"] },
      { id: "GRPractical", skills: ["Eclipse", "IntelliJ"] },
    ],
  },
  {
    id: "effigies",
    type: "mod",
    title: "Effigies",
    backgroundImage: "/images/ef_image.png",
    modLinks: {
      curseforgePagePath: "minecraft/mc-mods/jackperry2187-effigies",
      modrinthPagePath: "mod/effigies",
    },
    statKeys: {
      curseforgeDownloadsKey: "EfDownloads",
      modrinthDownloadsKey: "EfDownloads",
      modrinthFollowersKey: "EfFollowers",
    },
    githubHref: "https://github.com/jackperry2187/Effigies",
    description:
      "A Minecraft mod that adds powerful mob spawning prevention options to the game.",
    skills: [
      { id: "EpBackend", skills: ["Fabric", "NeoForge", "Gradle", "Java", "Java NIO"] },
      { id: "EpPractical", skills: ["Cursor", "Paint.net"] },
    ],
  },
  {
    id: "epitheca",
    type: "mod",
    title: "Epitheca",
    backgroundImage: "/images/ep_image.png",
    modLinks: {
      curseforgePagePath: "minecraft/mc-mods/epitheca",
      modrinthPagePath: "mod/epitheca",
    },
    statKeys: {
      curseforgeDownloadsKey: "EpDownloads",
      modrinthDownloadsKey: "EpDownloads",
      modrinthFollowersKey: "EpFollowers",
    },
    githubHref: "https://github.com/jackperry2187/epitheca",
    description:
      "Epitheca is a Minecraft mod that adds a variety of new craftable variants of existing blocks and items.",
    skills: [
      { id: "EpBackend", skills: ["Fabric", "Gradle", "Java", "Java NIO"] },
      { id: "EpPractical", skills: ["Aseprite", "Eclipse", "IntelliJ", "Paint.net"] },
    ],
  },
];