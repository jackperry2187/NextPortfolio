import { Card, CardBody, CardTitle } from "~/components/Card";
import { WebLink } from "~/components/Link";
import { Skill, SkillGroup, Skills } from "~/components/Skills";
import {
  GitHubLink,
  ProjectDescription,
  ProjectRow,
  ProjectTitle,
} from "../ProjectViewComponents";
import { webProjectsData } from "./webProjectsData";

export const WebProjects = () => {
  return (
    <ProjectRow>
      {webProjectsData.map((project) => (
        <Card key={project.id}>
          <CardTitle>
            <ProjectTitle>
              {project.webLink ? (
                <WebLink href={project.webLink}>{project.title}</WebLink>
              ) : (
                project.title
              )}
            </ProjectTitle>
            {project.githubHref && (
              <div className="flex justify-center pt-2">
                <GitHubLink href={project.githubHref} />
              </div>
            )}
          </CardTitle>
          <CardBody>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Skills>
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
    </ProjectRow>
  );
};