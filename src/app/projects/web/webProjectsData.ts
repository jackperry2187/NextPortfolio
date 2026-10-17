import type { BaseProjectData } from "../types";

export interface WebProjectData extends BaseProjectData {
  type: "web";
  webLink?: string;
}

export const webProjectsData: WebProjectData[] = [
  {
    id: "ccg-suite",
    type: "web",
    title: "CCG Suite",
    webLink: "https://www.ccgsuite.com/",
    description:
      "A web app that allows the user to keep track of a collection of Magic: The Gathering cards. Supports creating inventories and decks, adding/transfering/removing cards to/from them, bulk searching, and integrates with the Scryfall API.",
    skills: [
      {
        id: "CCGSuiteFrontend",
        skills: ["CSS", "HTML5", "Next.js", "React", "Radix", "Tailwind", "TanStack Query", "Zustand"],
      },
      { id: "CCGSuiteBackend", skills: ["Prisma", "tRPC", "Zod"] },
      {
        id: "CCGSuitePractical",
        skills: ["Clerk", "Node.js", "JavaScript", "TypeScript"],
      },
    ],
  },
  {
    id: "dawn",
    type: "web",
    title: "DAWN",
    webLink: "https://www.njea.org/an-apptitude-for-helping/",
    description:
      "The Depression Anxiety Wellness Network (DAWN) was created to centralize mental health resources for both students and adults. This included resources such as local yoga studios, schools, breathing and grounding techniques, and more. Partnered with both Feeling Swell (a local clothing company) and the Society for the Prevention of Teen Suicide. Unfortunately came to a close due to COVID.",
    skills: [
      { id: "DAWNFrontend", skills: ["Bootstrap 5", "CSS", "HTML5", "Handlebars.js", "JQuery"] },
      { id: "DAWNBackend", skills: ["BCrypt", "Express.js", "Firestore", "Redis"] },
      { id: "DAWNPractical", skills: ["Firebase", "Google Analytics", "JavaScript", "Trello"] },
    ],
  },
  {
    id: "vr-barnegat-bay",
    type: "web",
    title: "VR Barnegat Bay Simulation",
    webLink: "https://bluehawk.monmouth.edu/~barnegatbay/finalwebsite.html",
    description:
      "A virtual reality simulation of the Barnegat Bay created for the 2018 Monmouth University Summer Research Program.",
    skills: [
      { id: "VRBBFrontend", skills: ["Unity UI Design"] },
      { id: "VRBBBackend", skills: ["C#", "Oculus Integration SDK", "OVRPlugin"] },
      { id: "VRBBPractical", skills: ["Unity", "Virtual Reality"] },
    ],
  },
  {
    id: "assignment-portal",
    type: "web",
    title: "Assignment Portal",
    webLink: "https://lifeskills.software/",
    description:
      "An extension of the Life Skills Suite which allows teachers and students to create and take assignments. Constructed across two semesters during CS423 and CS424: Senior Design I and II.",
    skills: [
      { id: "APFrontend", skills: ["CSS", "HTML5", "Material UI v4", "React", "React Router", "Redux"] },
      { id: "APBackend", skills: ["Express.js", "MongoDB", "Mongoose"] },
      { id: "APPractical", skills: ["JavaScript", "Node.js", "TypeScript"] },
    ],
  },
  {
    id: "boardhub",
    type: "web",
    title: "BoardHub",
    githubHref: "https://github.com/roccopolimen/board-hub",
    description:
      "Trello-Clone final group project website for CS 546: Web Programming I in a team of 5.",
    skills: [
      { id: "BHFrontend", skills: ["Bootstrap 5", "CSS", "HTML5", "Handlebars.js", "JQuery"] },
      { id: "BHBackend", skills: ["BCrypt", "Express.js", "Google Calendar API", "MongoDB", "XSS"] },
      { id: "BHPractical", skills: ["JavaScript", "Node.js", "Trello"] },
    ],
  },
  {
    id: "ochm-thumbnails",
    type: "web",
    title: "OCHM Thumbnail Creator",
    githubHref: "https://github.com/jackperry2187/ochm-thumbnails",
    description:
      "A website created with Cursor and gemini-2.5-pro-exp-03-25 to automate the process of creating thumbnails for Ocean County Hive Mind.",
    skills: [
      {
        id: "OCHMThumbnailsFrontend",
        skills: ["CSS", "HTML5", "Next.js", "React", "Tailwind", "TanStack Query"],
      },
      { id: "OCHMThumbnailsBackend", skills: ["Prisma", "tRPC", "Zod"] },
      {
        id: "OCHMThumbnailsPractical",
        skills: ["Cursor", "JavaScript", "Gemini", "Node.js", "TypeScript"],
      },
    ],
  },
];