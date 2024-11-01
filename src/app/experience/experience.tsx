import Link from "next/link";
import { Card, CardBody, CardTitle } from "~/components/Card"
import { Calendar } from "~/components/icons";

// TODO: Add some way to easily search/filter by skills or technologies

export const ThinkAlpha = () => {
    return (
        <Card>
            <CardTitle>
                <Date>March 2022 - May 2024</Date>
                <JobTitle>Full-Stack Engineer</JobTitle>
                <Company>
                    <Link href="#TODO" className="underline">ThinkALPHA Technologies</Link>
                </Company>
                <Location>Remote</Location>
            </CardTitle>
            <CardBody>
                <Responsibilities>
                    <li>Reconstructed and modernized a widget focused on Short Locates using React, Redux Saga, shadcn/ui, and Tailwind. Additionally used Socket.IO and TanStack Query to communicate with a newly reconstructed backend</li>
                    <li>Implemented multiple contracts, controllers, and services revolving around complex user permissioning logic using Express.js, MongoDB, Postman, and tsoa</li>
                    <li>Customized FusionAuth theme templates with proprietary styles and components to allow a seamless integration of over 40 authentication pages with the existing product</li>
                    <li>Parsed and converted Financial Information eXchange (FIX) protocol requirements into custom and dynamic MaterialUI React forms that allowed users to place stock orders with fine-grained instructions</li>
                </Responsibilities>
            </CardBody>
        </Card>
    );
}

export const StevensCA = () => {
    return (
        <Card>
            <CardTitle>
                <Date>August 2021 - May 2022</Date>
                <JobTitle>Course Assistant</JobTitle>
                <Company>Stevens Institute of Technology</Company>
                <Location>Hoboken, NJ</Location>
            </CardTitle>
            <CardBody>
                <Responsibilities>
                    <li>Provided comprehensive instruction to graduate students in web development, guiding them through concepts such as AJAX, API development, asynchronous programming, Bootstrap, CSS, Express.js, HTML, JQuery, MongoDB, and Node.js.</li>
                    <li>Managed administrative tasks including scheduling and conducting weekly office hours, promptly grading labs and quizzes, and facilitating communication via email and Slack to create a supportive learning environment and offer timely assistance.</li>
                    <li>Mentored and guided students in troubleshooting technical issues, debugging code, and optimizing performance, cultivating problem-solving abilities and fostering a collaborative learning community.</li>
                </Responsibilities>
            </CardBody>
        </Card>       
    );
}

export const IDTech = () => {
    return (
        <Card>
            <CardTitle>
                <Date>June 2021 - August 2021</Date>
                <JobTitle>Zoom Instructor</JobTitle>
                <Company>iD Tech</Company>
                <Location>Remote</Location>
            </CardTitle>
            <CardBody>
                <Responsibilities>
                    <li>Manage a classroom of students in a virtual setting</li>
                    <li>Review academic material and create lesson plans for STEAM topics</li>
                    <li>Deliver high quality instruction to teach Java and making mods for Minecraft</li>
                    <li>Ensure an atmosphere of learning and growth within the online space</li>
                </Responsibilities>
            </CardBody>
        </Card>       
    );
}

export const NovaGames = () => {
    return (
        <Card>
            <CardTitle>
                <Date>September 2019 - May 2021</Date>
                <JobTitle>Clerk</JobTitle>
                <Company>Nova Games</Company>
                <Location>Brick, NJ</Location>
            </CardTitle>
            <CardBody>
                <Responsibilities>
                    <li>Manage buying and selling of goods to and from customers</li>
                    <li>Handle stocking, inventory, and creating displays</li>
                    <li>Run tournaments and events for game players</li>
                    <li>Ensure the space is orderly, organized, and clean</li>
                </Responsibilities>
            </CardBody>
        </Card>       
    );
}

export const Jenks = () => {
    return (
        <Card>
            <CardTitle>
                <Date>April 2019 - October 2019</Date>
                <JobTitle>Ride Operator</JobTitle>
                <Company>Jenkinson`&apos`s Ride Park</Company>
                <Location>Point Pleasant Beach, NJ</Location>
            </CardTitle>
            <CardBody>
                <Responsibilities>
                    <li>Learn and be tested on knowledge of operating the amusements safely</li>
                    <li>Ensure the safety of children riding the amusements</li>
                    <li>Manage and handle the exchange of credits for entrance to the ride</li>
                    <li>Operate and control the functions of the ride</li>
                </Responsibilities>
            </CardBody>
        </Card>       
    );
}

export const MonmouthResearcher = () => {
    return (
        <Card>
            <CardTitle>
                <Date>July 2018 - August 2018</Date>
                <JobTitle>Senior Research Associate</JobTitle>
                <Company>Monmouth University</Company>
                <Location>Long Branch, NJ</Location>
            </CardTitle>
            <CardBody>
                <Responsibilities>
                    <li>Worked in Unity developing in C# to create a VR simulation</li>
                    <li>The simulation revolved around the effects of nature on the Barnegat Bay as well as the effects of human interference</li>
                    <li>Worked with a team of associates across 6 weeks to develop the simulation and then presented it at a Symposium</li>
                    <li>More about the project <Link href="http://bit.ly/MonmouthSRPBBSim" target="_blank">here</Link> and in <Link href="/projects">projects</Link></li>
                </Responsibilities>
            </CardBody>
        </Card>       
    );
}

const Date = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div className="flex items-center gap-2">
            <Calendar />
            {children}
        </div>
    );
}

const JobTitle = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <h1 className="text-5xl p-1">
            {children}
        </h1>
    );
}

const Company = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div className="underline">
            {children}
        </div>
    );
}

const Location = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <div>
            {children}
        </div>
    );
}

const Responsibilities = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <ul className="list-disc">
            {children}
        </ul>
    );
}