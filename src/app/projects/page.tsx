import { ProjectViewManager } from "./ProjectViewManager";
import { PlanetMinecraftProjects } from "./legacy/planetminecraft/PlanetMinecraftProjects";
import { YouTubeProjects } from "./legacy/youtube/YouTubeProjects";
import { ModdingProjects } from "./modding/ModdingProjects";
import { WebProjects } from "./web/WebProjects";

const Projects = () => (
  <div className="flex w-full flex-col py-1 text-slate-200">
    <ProjectViewManager
      moddingContent={<ModdingProjects />}
      webContent={<WebProjects />}
      legacyContent={{
        planetminecraft: <PlanetMinecraftProjects />,
        youtube: <YouTubeProjects />,
      }}
    />
  </div>
);

export default Projects;
