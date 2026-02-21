// Generated with gemini-2.5-pro-exp-03-25 through Cursor
export interface ProjectSkillGroup {
  id: string;
  skills: string[];
}

export type CurseforgeStatKey = "GRDownloads" | "EfDownloads" | "EpDownloads";
export type ModrinthStatKey = "GRDownloads" | "EfDownloads" | "EpDownloads" | "GRFollowers" | "EfFollowers" | "EpFollowers";


export interface ModStatKeys {
  curseforgeDownloadsKey: CurseforgeStatKey;
  modrinthDownloadsKey: ModrinthStatKey;
  modrinthFollowersKey: ModrinthStatKey;
}

export interface BaseProjectData {
  id: string;
  title: string;
  description: string;
  skills: ProjectSkillGroup[];
  githubHref?: string;
}

export interface ModProjectData extends BaseProjectData {
  type: 'mod';
  backgroundImage?: string;
  modLinks: {
    curseforgePagePath: string; // e.g., "minecraft/mc-mods/gentlereminders"
    modrinthPagePath: string;   // e.g., "mod/gentlereminders"
  };
  statKeys: ModStatKeys;
}

export interface WebProjectData extends BaseProjectData {
  type: 'web';
  webLink?: string;
}

export type ProjectData = ModProjectData | WebProjectData;

export const allProjectsData: ProjectData[] = [
  // Modding Projects
  {
    id: "gentle-reminders",
    type: 'mod',
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
    description: "Gentle Reminders is a Minecraft mod that sends mindful messages to the player every so often based on a customizable config file.",
    skills: [
      { id: "GRBackend", skills: ["Fabric", "NeoForge", "Gradle", "Java", "Java NIO"] },
      { id: "GRPractical", skills: ["Eclipse", "IntelliJ"] }
    ]
  },
  {
    id: "effigies",
    type: 'mod',
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
    description: "A Minecraft mod that adds powerful mob spawning prevention options to the game.",
    skills: [
      { id: "EpBackend", skills: ["Fabric", "NeoForge", "Gradle", "Java", "Java NIO"] },
      { id: "EpPractical", skills: ["Cursor", "Paint.net"] }
    ]
  },
  {
    id: "epitheca",
    type: 'mod',
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
    description: "Epitheca is a Minecraft mod that adds a variety of new craftable variants of existing blocks and items.",
    skills: [
      { id: "EpBackend", skills: ["Fabric", "Gradle", "Java", "Java NIO"] },
      { id: "EpPractical", skills: ["Aseprite", "Eclipse", "IntelliJ", "Paint.net"] }
    ]
  },
  // Web Projects
  {
    id: "ccg-suite",
    type: 'web',
    title: "CCG Suite",
    webLink: "https://www.ccgsuite.com/",
    description: "A web app that allows the user to keep track of a collection of Magic: The Gathering cards. Supports creating inventories and decks, adding/transfering/removing cards to/from them, bulk searching, and integrates with the Scryfall API.",
    skills: [
      { id: "CCGSuiteFrontend", skills: ["CSS", "HTML5", "Next.js", "React", "Radix", "Tailwind", "TanStack Query", "Zustand"] },
      { id: "CCGSuiteBackend", skills: ["Prisma", "tRPC", "Zod"] },
      { id: "CCGSuitePractical", skills: ["Clerk", "Node.js", "JavaScript", "TypeScript"] }
    ]
  },
  {
    id: "dawn",
    type: 'web',
    title: "DAWN",
    webLink: "https://www.njea.org/an-apptitude-for-helping/",
    description: "The Depression Anxiety Wellness Network (DAWN) was created to centralize mental health resources for both students and adults. This included resources such as local yoga studios, schools, breathing and grounding techniques, and more. Partnered with both Feeling Swell (a local clothing company) and the Society for the Prevention of Teen Suicide. Unfortunately came to a close due to COVID.",
    skills: [
      { id: "DAWNFrontend", skills: ["Bootstrap 5", "CSS", "HTML5", "Handlebars.js", "JQuery"] },
      { id: "DAWNBackend", skills: ["BCrypt", "Express.js", "Firestore", "Redis"] },
      { id: "DAWNPractical", skills: ["Firebase", "Google Analytics", "JavaScript", "Trello"] }
    ]
  },
  {
    id: "vr-barnegat-bay",
    type: 'web',
    title: "VR Barnegat Bay Simulation",
    webLink: "https://bluehawk.monmouth.edu/~barnegatbay/finalwebsite.html",
    description: "A virtual reality simulation of the Barnegat Bay created for the 2018 Monmouth University Summer Research Program.",
    skills: [
      { id: "VRBBFrontend", skills: ["Unity UI Design"] },
      { id: "VRBBBackend", skills: ["C#", "Oculus Integration SDK", "OVRPlugin"] },
      { id: "VRBBPractical", skills: ["Unity", "Virtual Reality"] }
    ]
  },
  {
    id: "assignment-portal",
    type: 'web',
    title: "Assignment Portal",
    webLink: "https://lifeskills.software/",
    description: "An extension of the Life Skills Suite which allows teachers and students to create and take assignments. Constructed across two semesters during CS423 and CS424: Senior Design I and II.",
    skills: [
      { id: "APFrontend", skills: ["CSS", "HTML5", "Material UI v4", "React", "React Router", "Redux"] },
      { id: "APBackend", skills: ["Express.js", "MongoDB", "Mongoose"] },
      { id: "APPractical", skills: ["JavaScript", "Node.js", "TypeScript"] }
    ]
  },
  {
    id: "boardhub",
    type: 'web',
    title: "BoardHub",
    githubHref: "https://github.com/roccopolimen/board-hub",
    description: "Trello-Clone final group project website for CS 546: Web Programming I in a team of 5.",
    skills: [
      { id: "BHFrontend", skills: ["Bootstrap 5", "CSS", "HTML5", "Handlebars.js", "JQuery"] },
      { id: "BHBackend", skills: ["BCrypt", "Express.js", "Google Calendar API", "MongoDB", "XSS"] },
      { id: "BHPractical", skills: ["JavaScript", "Node.js", "Trello"] }
    ]
  },
  {
    id: "ochm-thumbnails",
    type: 'web',
    title: "OCHM Thumbnail Creator",
    githubHref: "https://github.com/jackperry2187/ochm-thumbnails",
    description: "A website created with Cursor and gemini-2.5-pro-exp-03-25 to automate the process of creating thumbnails for Ocean County Hive Mind.",
    skills: [
      { id: "OCHMThumbnailsFrontend", skills: ["CSS", "HTML5", "Next.js", "React", "Tailwind", "TanStack Query"] },
      { id: "OCHMThumbnailsBackend", skills: ["Prisma", "tRPC", "Zod"] },
      { id: "OCHMThumbnailsPractical", skills: ["Cursor", "JavaScript", "Gemini", "Node.js", "TypeScript"] }
    ]
  }
//   {
//     id: "trip-planner",
//     type: 'web',
//     title: "Trip Planner",
//     githubHref: "https://github.com/jackperry2187/Trip_Planner",
//     description: "Final project website for CS-545: Human Computer Interaction.",
//     skills: [
//       { id: "TPFrontend", skills: ["Bootstrap 5", "CSS", "HTML5", "Handlebars.js"] },
//       { id: "TPBackend", skills: ["BCrypt", "Express.js", "MongoDB"] },
//       { id: "TPPractical", skills: ["JavaScript", "Node.js"] }
//     ]
//   }
]; 