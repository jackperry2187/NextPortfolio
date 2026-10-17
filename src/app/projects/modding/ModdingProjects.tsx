import { Card, CardBody, CardTitle } from "~/components/Card";
import { Skill, SkillGroup, Skills } from "~/components/Skills";
import {
  GitHubLink,
  ModProjectRow,
  ProjectDescription,
  ProjectTitle,
} from "../ProjectViewComponents";
import { ModProjectClientInfo } from "./ModProjectClientInfo";
import { ModdingProjectsTotals } from "./ModdingProjectsTotals";
import { moddingProjectsData } from "./moddingProjectsData";

export const ModdingProjects = () => {
  return (
    <>
      <ModdingProjectsTotals
        statKeys={moddingProjectsData.map((project) => project.statKeys)}
      />
      <ModProjectRow>
        {moddingProjectsData.map((project) => (
          <Card key={project.id} backgroundImage={project.backgroundImage}>
            <CardTitle>
              <ProjectTitle>{project.title}</ProjectTitle>
              <div className="flex justify-center gap-4 pt-3">
                <ModProjectClientInfo
                  curseforgePagePath={project.modLinks.curseforgePagePath}
                  modrinthPagePath={project.modLinks.modrinthPagePath}
                  statKeys={project.statKeys}
                />
                {project.githubHref && <GitHubLink href={project.githubHref} />}
              </div>
            </CardTitle>
            <CardBody>
              <ProjectDescription>{project.description}</ProjectDescription>
              <Skills startsOpen>
                {project.skills.map((group) => (
                  <SkillGroup key={group.id} id={group.id}>
                    {group.skills.map((skill) => (
                      <Skill key={skill}>{skill}</Skill>
                    ))}
                  </SkillGroup>
                ))}
              </Skills>
            </CardBody>
          </Card>
        ))}
      </ModProjectRow>
    </>
  );
};