import { ProjectViewManager } from "./ProjectViewManager";
import { PlanetMinecraftProjects } from "./legacy/planetminecraft/PlanetMinecraftProjects";
import { ModdingProjects } from "./modding/ModdingProjects";
import { WebProjects } from "./web/WebProjects";

const Projects = () => (
  <div className="flex flex-col py-1 text-slate-200">
    <ProjectViewManager
      moddingContent={<ModdingProjects />}
      webContent={<WebProjects />}
      legacyContent={{ planetminecraft: <PlanetMinecraftProjects /> }}
    />
  </div>
);

export default Projects;
