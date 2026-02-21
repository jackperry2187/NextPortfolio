// Enhanced with gemini-2.5-pro-exp-03-25 through Cursor
import Link from "next/link";
import { Card, CardBody, CardTitle } from "~/components/Card";
import { GitHub } from "~/components/icons";
import { WebLink } from "~/components/Link";
import { Expander } from "~/components/Expander";
import { Skill, SkillGroup, Skills } from "~/components/Skills";
import { allProjectsData } from "./projectsData";
import { ModProjectClientInfo } from "./ModProjectClientInfo";
import { ProjectViewManager } from "./ProjectViewManager";

const Projects = () => {
    const modProjects = allProjectsData.filter(p => p.type === 'mod');
    const webProjects = allProjectsData.filter(p => p.type === 'web');

    return (
        <div className="flex flex-col text-slate-200 py-1">
            <ProjectViewManager
                moddingContent={
                    <ModRow>
                        {modProjects.map((project) => {
                            if (project.type !== 'mod') return null;
                            return (
                                <Card key={project.id} backgroundImage={project.backgroundImage}>
                                    <CardTitle>
                                        <Title>{project.title}</Title>
                                        <div className="flex gap-4 justify-center pt-3">
                                            <ModProjectClientInfo
                                                curseforgePagePath={project.modLinks.curseforgePagePath}
                                                modrinthPagePath={project.modLinks.modrinthPagePath}
                                                statKeys={project.statKeys}
                                            />
                                            {project.githubHref && <GitHubLink href={project.githubHref} />}
                                        </div>
                                    </CardTitle>
                                    <CardBody>
                                        <Desc>
                                            {project.description}
                                        </Desc>
                                        <Skills startsOpen={true}>
                                            {project.skills.map(group => (
                                                <SkillGroup key={group.id} id={group.id}>
                                                    {group.skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
                                                </SkillGroup>
                                            ))}
                                        </Skills>
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </ModRow>
                }
                webContent={
                    <Row>
                        {webProjects.map((project) => {
                            if (project.type !== 'web') return null;
                            return (
                                <Card key={project.id}>
                                    <CardTitle>
                                        <Title>
                                            {project.webLink ? (
                                                <WebLink href={project.webLink}>{project.title}</WebLink>
                                            ) : (
                                                project.title
                                            )}
                                        </Title>
                                        {project.githubHref && (
                                            <div className="flex justify-center pt-2">
                                                <GitHubLink href={project.githubHref} />
                                            </div>
                                        )}
                                    </CardTitle>
                                    <CardBody>
                                        <Desc>
                                            {project.description}
                                        </Desc>
                                        <Skills>
                                            {project.skills.map(group => (
                                                <SkillGroup key={group.id} id={group.id}>
                                                    {group.skills.map(skill => <Skill key={skill}>{skill}</Skill>)}
                                                </SkillGroup>
                                            ))}
                                        </Skills>
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </Row>
                }
            />
        </div>
    )
}

export default Projects;

const Row = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-3 gap-5">
            {children}
        </div>
    );
}

const ModRow = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 p-3 gap-5">
            {children}
        </div>
    );
}

const Title = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
 ) => {
    return (
        <h3 className="text-3xl">
            {children}
        </h3>
    );
}

const Desc = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <Expander header="Description" startsOpen>
            <div className="p-2">
                {children}
            </div>
        </Expander>
    );
}

const GitHubLink = (
    {
        href,
    }: Readonly<{
        href: string;
    }>
) => {
    return (
        <Link href={href} className="hover:text-blue-400">
            <GitHub size="sm" />
        </Link>
    )
}