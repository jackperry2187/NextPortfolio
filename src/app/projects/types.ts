export interface ProjectSkillGroup {
  id: string;
  skills: string[];
}

export interface BaseProjectData {
  id: string;
  title: string;
  description: string;
  skills: ProjectSkillGroup[];
  githubHref?: string;
}