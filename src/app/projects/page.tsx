'use client'

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "~/components/Card";
import { Curseforge, GitHub, Modrinth } from "~/components/icons";
import { getCurseforgeInfo } from "./Curseforge";
import { getModrinthInfo } from "./Modrinth";
import { WebLink } from "~/components/Link";

const Projects = () => {
    const [GRCFDownloads, setGRCFDownloads] = useState<number | null>(null);
    const [GRMRDownloads, setGRMRDownloads] = useState<number | null>(null);
    const [GRMRFollowers, setGRMRFollowers] = useState<number | null>(null);

    const [EpCFDownloads, setEpCFDownloads] = useState<number | null>(null);
    const [EpMRDownloads, setEpMRDownloads] = useState<number | null>(null);
    const [EpMRFollowers, setEpMRFollowers] = useState<number | null>(null);

    const getCurseforge = useCallback(async () => {
        const curseforgeInfo = await getCurseforgeInfo();
        setGRCFDownloads(curseforgeInfo.GRDownloads);
        setEpCFDownloads(curseforgeInfo.EpDownloads);
    }, [setGRCFDownloads, setEpCFDownloads]);

    const getModrinth = useCallback(async () => {
        const modrinthInfo = await getModrinthInfo();
        setGRMRDownloads(modrinthInfo.GRDownloads);
        setGRMRFollowers(modrinthInfo.GRFollowers);
        setEpMRDownloads(modrinthInfo.EpDownloads);
        setEpMRFollowers(modrinthInfo.EpFollowers);
    }, [setGRMRDownloads, setEpMRDownloads, setGRMRFollowers, setEpMRFollowers]);

    useEffect(() => {
        void getCurseforge();
        void getModrinth();
    }, [getCurseforge, getModrinth]);

    return (
        <div className="flex flex-col text-slate-200 py-1">
            <CardTitle>Modding Projects</CardTitle>
            <ModRow>
                <Card>
                    <CardTitle>
                            <Title>Gentle Reminders</Title>
                            <div className="flex gap-4 justify-center pt-3">
                                <LinkOuter><CurseforgeLink href={"https://www.curseforge.com/minecraft/mc-mods/gentlereminders"} />: {GRCFDownloads} Downloads</LinkOuter>
                                <LinkOuter><ModrinthLink href={"https://modrinth.com/mod/gentlereminders"} />: {GRMRDownloads} Downloads, {GRMRFollowers} followers</LinkOuter>
                                <GitHubLink href={"https://github.com/jackperry2187/GentleReminders"} />
                            </div>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            Gentle Reminders is a Minecraft mod that sends mindful messages to the player every so often based on a customizable config file.
                        </Desc>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                            <Title>Epitheca</Title>
                            <div className="flex gap-4 justify-center pt-3">
                                <LinkOuter><CurseforgeLink href={"https://www.curseforge.com/minecraft/mc-mods/epitheca"} />: {EpCFDownloads} Downloads</LinkOuter>
                                <LinkOuter><ModrinthLink href={"https://modrinth.com/mod/epitheca"} />: {EpMRDownloads} Downloads, {EpMRFollowers} followers</LinkOuter>
                                <GitHubLink href={"https://github.com/jackperry2187/epitheca"} />
                            </div>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            Epitheca is a Minecraft mod that adds a variety of new craftable variants of existing blocks and items.
                        </Desc>
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
                            A web app I made for mostly personal use in order to keep track of a Magic: The Gathering collection of cards. Supports creating inventories and decks, adding/transfering/removing cards to/from them, bulk searching, and integrates with the Scryfall API.
                        </Desc>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                        <Title><WebLink href={"https://www.njea.org/an-apptitude-for-helping/"}>DAWN</WebLink></Title>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            The Depression Anxiety Wellness Network (DAWN) was created to help students and adults who suffer from mental illnesses. Since then, it has grown to be a helpful resource available to everybody. With many different features, DAWN is a place where anybody can go to help themselves cope, breathe, or smile when life gets stressful.
                        </Desc>
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle>
                        <Title><WebLink href={"https://bluehawk.monmouth.edu/~barnegatbay/finalwebsite.html"}>VR Barnegat Bay Simulation</WebLink></Title>
                    </CardTitle>
                    <CardBody>
                        <Desc>
                            2018 Monmouth University Summer Research Project. 
                        </Desc>
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
        <p className="">
            {children}
        </p>
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