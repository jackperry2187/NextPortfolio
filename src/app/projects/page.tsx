'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "~/components/Card";
import { Curseforge, GitHub, Modrinth } from "~/components/icons";
import { WebLink } from "~/components/Link";
import { useModStore } from "../state/modState";
import { useShallow } from "zustand/shallow";
import { type CurseforgeInfo, type ModrinthInfo } from "../state/modTypes";
import { Expander } from "~/components/Expander";
import { Skill, SkillGroup, Skills } from "~/components/Skills";

const Projects = () => {
    const [modrinthInfo, setModrinthInfo] = useState<ModrinthInfo | null>(null);
    const [curseforgeInfo, setCurseforgeInfo] = useState<CurseforgeInfo | null>(null);

    const [getModrinthInfo, getCurseforgeInfo] = useModStore(useShallow((state) => [state.getModrinth, state.getCurseforge]));

    useEffect(() => {
        const getInfo = async() => {
            setModrinthInfo(await getModrinthInfo());
            setCurseforgeInfo(await getCurseforgeInfo());
        }

        if(!modrinthInfo || !curseforgeInfo) void getInfo();
    }, [modrinthInfo, curseforgeInfo, getModrinthInfo, getCurseforgeInfo]);

    return (
        <div className="flex flex-col text-slate-200 py-1">
            <CardTitle>Modding Projects</CardTitle>
            <ModRow>
                <Card>
                    <CardTitle>
                            <Title>Gentle Reminders</Title>
                            <div className="flex gap-4 justify-center pt-3">
                                <LinkOuter><CurseforgeLink href={"https://www.curseforge.com/minecraft/mc-mods/gentlereminders"} />: {curseforgeInfo ? curseforgeInfo.GRDownloads : 'Loading'} Downloads</LinkOuter>
                                <LinkOuter><ModrinthLink href={"https://modrinth.com/mod/gentlereminders"} />: {modrinthInfo ? modrinthInfo.GRDownloads : 'Loading'} Downloads, {modrinthInfo ? modrinthInfo.GRFollowers : 'Loading'} followers</LinkOuter>
                                <GitHubLink href={"https://github.com/jackperry2187/GentleReminders"} />
                            </div>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            Gentle Reminders is a Minecraft mod that sends mindful messages to the player every so often based on a customizable config file.
                        </Desc>
                        <Skills>
                            <SkillGroup id="GRBackend">
                                <Skill>Fabric</Skill>
                                <Skill>Gradle</Skill>
                                <Skill>Java</Skill>
                                <Skill>Java NIO</Skill>
                            </SkillGroup>
                            <SkillGroup id="GRPractical">
                                <Skill>Eclipse</Skill>
                                <Skill>IntelliJ</Skill>
                            </SkillGroup>
                        </Skills>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                            <Title>Epitheca</Title>
                            <div className="flex gap-4 justify-center pt-3">
                                <LinkOuter><CurseforgeLink href={"https://www.curseforge.com/minecraft/mc-mods/epitheca"} />: {curseforgeInfo ? curseforgeInfo.EpDownloads : 'Loading'} Downloads</LinkOuter>
                                <LinkOuter><ModrinthLink href={"https://modrinth.com/mod/epitheca"} />: {modrinthInfo ? modrinthInfo.EpDownloads : 'Loading'} Downloads, {modrinthInfo ? modrinthInfo.EpFollowers : 'Loading'} followers</LinkOuter>
                                <GitHubLink href={"https://github.com/jackperry2187/epitheca"} />
                            </div>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            Epitheca is a Minecraft mod that adds a variety of new craftable variants of existing blocks and items.
                        </Desc>
                        <Skills>
                            <SkillGroup id="EpBackend">
                                <Skill>Fabric</Skill>
                                <Skill>Gradle</Skill>
                                <Skill>Java</Skill>
                                <Skill>Java NIO</Skill>
                            </SkillGroup>
                            <SkillGroup id="EpPractical">
                                <Skill>Aseprite</Skill>
                                <Skill>Eclipse</Skill>
                                <Skill>IntelliJ</Skill>
                                <Skill>Paint.net</Skill>
                            </SkillGroup>
                        </Skills>
                    </CardBody>
                </Card>
            </ModRow>

            <CardTitle>Web Projects</CardTitle>
            <Row>
                <Card>
                    <CardTitle>
                        <Title><WebLink href={"https://www.ccgsuite.com/"}>CCG Suite</WebLink></Title>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            A web app that allows the user to keep track of a collection of Magic: The Gathering cards. Supports creating inventories and decks, adding/transfering/removing cards to/from them, bulk searching, and integrates with the Scryfall API.
                        </Desc>
                        <Skills>
                            <SkillGroup id="CCGSuiteFrontend">
                                <Skill>CSS</Skill>
                                <Skill>HTML5</Skill>
                                <Skill>Next.js</Skill>
                                <Skill>React</Skill>
                                <Skill>Radix</Skill>
                                <Skill>Tailwind</Skill>
                                <Skill>TanStack Query</Skill>
                                <Skill>Zustand</Skill>
                            </SkillGroup>
                            <SkillGroup id="CCGSuiteBackend">
                                <Skill>Prisma</Skill>
                                <Skill>tRPC</Skill>
                                <Skill>Zod</Skill>
                            </SkillGroup>
                            <SkillGroup id="CCGSuitePractical">
                                <Skill>Clerk</Skill>
                                <Skill>Node.js</Skill>
                                <Skill>JavaScript</Skill>
                                <Skill>TypeScript</Skill>
                            </SkillGroup>
                        </Skills>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                        <Title><WebLink href={"https://www.njea.org/an-apptitude-for-helping/"}>DAWN</WebLink></Title>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            The Depression Anxiety Wellness Network (DAWN) was created to centralize mental health resources for both students and adults. This included resources such as local yoga studios, schools, breathing and grounding techniques, and more. Partnered with both Feeling Swell (a local clothing company) and the Society for the Prevention of Teen Suicide. Unfortunately came to a close due to COVID.
                        </Desc>
                        <Skills>
                            <SkillGroup id="DAWNFrontend">
                                <Skill>Bootstrap 5</Skill>
                                <Skill>CSS</Skill>
                                <Skill>HTML5</Skill>
                                <Skill>Handlebars.js</Skill>
                                <Skill>JQuery</Skill>
                            </SkillGroup>
                            <SkillGroup id="DAWNBackend">
                                <Skill>BCrypt</Skill>
                                <Skill>Express.js</Skill>
                                <Skill>Firestore</Skill>
                                <Skill>Redis</Skill>
                            </SkillGroup>
                            <SkillGroup id="DAWNPractical">
                                <Skill>Firebase</Skill>
                                <Skill>Google Analytics</Skill>
                                <Skill>JavaScript</Skill>
                                <Skill>Trello</Skill>
                            </SkillGroup>
                        </Skills>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                        <Title><WebLink href={"https://bluehawk.monmouth.edu/~barnegatbay/finalwebsite.html"}>VR Barnegat Bay Simulation</WebLink></Title>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            A virtual reality simulation of the Barnegat Bay created for the 2018 Monmouth University Summer Research Program. 
                        </Desc>
                        <Skills>
                            <SkillGroup id="VRBBFrontend">
                                <Skill>Unity UI Design</Skill>
                            </SkillGroup>
                            <SkillGroup id="VRBBBackend">
                                <Skill>C#</Skill>
                                <Skill>Oculus Integration SDK</Skill>
                                <Skill>OVRPlugin</Skill>
                            </SkillGroup>
                            <SkillGroup id="VRBBPractical">
                                <Skill>Unity</Skill>
                                <Skill>Virtual Reality</Skill>
                            </SkillGroup>
                        </Skills>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                        <Title><WebLink href={"https://lifeskills.software/"}>Assignment Portal</WebLink></Title>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                           An extension of the Life Skills Suite which allows teachers and students to create and take assignments. Constructed across two semesters during CS423 and CS424: Senior Design I and II.
                        </Desc>
                        <Skills>
                            <SkillGroup id="APFrontend">
                                <Skill>CSS</Skill>
                                <Skill>HTML5</Skill>
                                <Skill>Material UI v4</Skill>
                                <Skill>React</Skill>
                                <Skill>React Router</Skill>
                                <Skill>Redux</Skill>
                            </SkillGroup>
                            <SkillGroup id="APBackend">
                                <Skill>Express.js</Skill>
                                <Skill>MongoDB</Skill>
                                <Skill>Mongoose</Skill>
                            </SkillGroup>
                            <SkillGroup id="APPractical">
                                <Skill>JavaScript</Skill>
                                <Skill>Node.js</Skill>
                                <Skill>TypeScript</Skill>
                            </SkillGroup>
                        </Skills>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                        <Title>BoardHub</Title>
                        <GitHubLink href={"https://github.com/roccopolimen/board-hub"} />
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            Trello-Clone final group project website for CS 546: Web Programming I in a team of 5.
                        </Desc>
                        <Skills>
                            <SkillGroup id="BHFrontend">
                                <Skill>Bootstrap 5</Skill>
                                <Skill>CSS</Skill>
                                <Skill>HTML5</Skill>
                                <Skill>Handlebars.js</Skill>
                                <Skill>JQuery</Skill>
                            </SkillGroup>
                            <SkillGroup id="BHBackend">
                                <Skill>BCrypt</Skill>
                                <Skill>Express.js</Skill>
                                <Skill>Google Calendar API</Skill>
                                <Skill>MongoDB</Skill>
                                <Skill>XSS</Skill>
                            </SkillGroup>
                            <SkillGroup id="BHPractical">
                                <Skill>JavaScript</Skill>
                                <Skill>Node.js</Skill>
                                <Skill>Trello</Skill>
                            </SkillGroup>
                        </Skills>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                        <Title>Trip Planner</Title>
                        <GitHubLink href={"https://github.com/jackperry2187/Trip_Planner"} />
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            Final project website for CS-545: Human Computer Interaction.
                        </Desc>
                        <Skills>
                            <SkillGroup id="TPFrontend">
                                <Skill>Bootstrap 5</Skill>
                                <Skill>CSS</Skill>
                                <Skill>HTML5</Skill>
                                <Skill>Handlebars.js</Skill>
                            </SkillGroup>
                            <SkillGroup id="TPBackend">
                                <Skill>BCrypt</Skill>
                                <Skill>Express.js</Skill>
                                <Skill>MongoDB</Skill>
                            </SkillGroup>
                            <SkillGroup id="TPPractical">
                                <Skill>JavaScript</Skill>
                                <Skill>Node.js</Skill>
                            </SkillGroup>
                        </Skills>
                    </CardBody>
                </Card>
            </Row>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 p-3 gap-5">
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

const LinkOuter = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div className="flex items-center text-center text-sm">
            {children}
        </div>
    );
}

const CurseforgeLink = (
    {
        href,
    }: Readonly<{
        href: string;
    }>
) => {
    return (
        <Link href={href} className="hover:text-blue-400">
            <Curseforge size="sm" />
        </Link>
    );
}

const ModrinthLink = (
    {
        href,
    }: Readonly<{
        href: string;
    }>
) => {
    return (
        <Link href={href} className="hover:text-blue-400">
            <Modrinth size="sm" />
        </Link>
    );
}