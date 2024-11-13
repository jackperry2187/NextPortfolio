'use client'

import { Card, CardBody, CardTitle } from "~/components/Card"
import { Expander } from "~/components/Expander";
import { Calendar } from "~/components/icons";
import { WebLink } from "~/components/Link";
import { Skill, SkillGroup, Skills } from "~/components/Skills";

export const HiveMind = () => {
    return (
        <Card>
            <CardTitle>
                <Date>March 2024 - Present</Date>
                <JobTitle>CFO & Content/Visual Design Manager</JobTitle>
                <Company>
                    <WebLink href="https://www.youtube.com/@OCHiveMind">Hive Mind Entertainment LLC</WebLink>
                </Company>
                <Location>Whiting, NJ</Location>
            </CardTitle>
            <CardBody>
                <Skills>
                    <SkillGroup id="HMSoftware">
                        <Skill>Google AdSense</Skill>
                        <Skill>LegalZoom</Skill>
                        <Skill>Open Broadcaster Software</Skill>
                        <Skill>Paint.net</Skill>
                        <Skill>QuickBooks</Skill>
                        <Skill>Streamlabs</Skill>
                    </SkillGroup>
                    <SkillGroup id="HMPractical">
                        <Skill>Accounting</Skill>
                        <Skill>Content Creation</Skill>
                        <Skill>Customer Service</Skill>
                        <Skill>Financial Reporting</Skill>
                        <Skill>Marketing</Skill>
                        <Skill>Streaming</Skill>
                        <Skill>Video Editing</Skill>
                    </SkillGroup>
                </Skills>
                <ProfessionalSummary>
                    <li>Overseeing all financial operations, including account setup, tax identification acquisition, and transaction management via QuickBooks.</li>
                    <li>Compile and provide financial statements and reports to partners on a monthly basis, detailing earnings, expenses, and outstanding obligations.</li>
                    <li>Utilize Paint.net to design and create visually appealing thumbnails and channel art to attract viewers and subscribers.</li>
                    <li>Assisted with the design of promotional game tokens featuring custom artwork and branded information, distributed as free marketing items to boost channel visibility and audience engagement.</li>
                    <li>Manage and maintain a consistent streaming schedule on Twitch, engaging with viewers and promoting the channel to increase followers and subscribers.</li>
                    <li>Produce high-quality video content from recorded streams, leading to a steady five-day upload schedule to YouTube.</li>
                </ProfessionalSummary>
            </CardBody>
        </Card>
    )
}

export const ThinkAlpha = () => {
    return (
        <Card>
            <CardTitle>
                <Date>March 2022 - May 2024</Date>
                <JobTitle>Full-Stack Engineer</JobTitle>
                <Company>
                    <WebLink href="https://thinkalpha.io/">THINKalpha Technologies</WebLink>
                </Company>
                <Location>Remote</Location>
            </CardTitle>
            <CardBody>
                <Skills>
                    <SkillGroup id="TAFrontend">
                        <Skill>CSS</Skill>
                        <Skill>HTML</Skill>
                        <Skill>MaterialUI</Skill>
                        <Skill>React</Skill>
                        <Skill>Redux Saga</Skill>
                        <Skill>shadcn/ui</Skill>
                        <Skill>Socket.IO</Skill>
                        <Skill>Storybook</Skill>
                        <Skill>TanStack Query</Skill>
                        <Skill>Tailwind</Skill>
                    </SkillGroup>
                    <SkillGroup id="TABackend">
                        <Skill>Express.js</Skill>
                        <Skill>MongoDB</Skill>
                        <Skill>MongoDB Atlas</Skill>
                        <Skill>Sentry</Skill>
                        <Skill>tsoa</Skill>
                    </SkillGroup>
                    <SkillGroup id="TAPractical">
                        <Skill>Agile Methodologies</Skill>
                        <Skill>Code Review</Skill>
                        <Skill>Docker</Skill>
                        <Skill>Figma</Skill>
                        <Skill>FusionAuth</Skill>
                        <Skill>Git / GitHub</Skill>
                        <Skill>JavaScript</Skill>
                        <Skill>Jira</Skill>
                        <Skill>Mentoring</Skill>
                        <Skill>Node.js</Skill>
                        <Skill>Postman</Skill>
                        <Skill>Slack</Skill>
                        <Skill>TypeScript</Skill>
                        <Skill>Watchdog</Skill>
                    </SkillGroup>
                </Skills>
                <ProfessionalSummary>
                    <li>Reconstructed and modernized a dashboard widget allowing stock brokers to find entities willing to lend stocks to them at a particular price. Additionally hooked reconstructed frontend into newly reconstructed backend.</li>
                    <li>Implemented multiple contracts, controllers, and services revolving around complex user permissioning logic.</li>
                    <li>Monitored and tracked real-time user activity and errors using Watchdog and Sentry, ensuring immediate response to critical issues affecting user experience.</li>
                    <li>Customized FusionAuth theme templates with proprietary styles and components to allow a seamless integration of over 40 authentication pages with the existing product.</li>
                    <li>Parsed and converted Financial Information eXchange (FIX) protocol requirements into custom and dynamic forms that allowed users to place stock orders with fine-grained instructions.</li>
                    <li>Frequently communicated with our users (stock brokers using the website) to determine new tasks for both myself and others.</li>
                    <li>Utilized Jira to track and manage bugs, tasks, and user stories, maintaining a consistent weekly sprint schedule aligned with Agile methodoligies, enhancing team collaboration and project transparency.</li>
                </ProfessionalSummary>
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
                <Company><WebLink href={"https://www.stevens.edu/"}>Stevens Institute of Technology</WebLink></Company>
                <Location>Hoboken, NJ</Location>
            </CardTitle>
            <CardBody>
                <Skills>
                    <SkillGroup id="CAFrontend">
                        <Skill>AJAX</Skill>
                        <Skill>Bootstrap</Skill>
                        <Skill>CSS</Skill>
                        <Skill>HTML</Skill>
                        <Skill>JQuery</Skill>
                    </SkillGroup>
                    <SkillGroup id="CABackend">
                        <Skill>Express.js</Skill>
                        <Skill>MongoDB</Skill>
                    </SkillGroup>
                    <SkillGroup id="CAPractical">
                        <Skill>Asynchronous Programming</Skill>
                        <Skill>API Development</Skill>
                        <Skill>Code Review</Skill>
                        <Skill>JavaScript</Skill>
                        <Skill>Mentoring</Skill>
                        <Skill>Node.js</Skill>
                        <Skill>Postman</Skill>
                        <Skill>Slack</Skill>
                        <Skill>TypeScript</Skill>
                    </SkillGroup>
                </Skills>
                <ProfessionalSummary>
                    <li>Provided comprehensive instruction to graduate students in web development, guiding them through complex programming fundamentals and web concepts.</li>
                    <li>Managed administrative tasks including scheduling and conducting weekly office hours, promptly grading labs and quizzes, and facilitating communication via email and Slack to create a supportive learning environment and offer timely assistance.</li>
                    <li>Mentored and guided students in troubleshooting technical issues, debugging code, and optimizing performance, cultivating problem-solving abilities and fostering a collaborative learning community.</li>
                </ProfessionalSummary>
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
                <Company><WebLink href={"https://www.idtech.com/"}>iD Tech</WebLink></Company>
                <Location>Remote</Location>
            </CardTitle>
            <CardBody>
                <Skills>
                    <SkillGroup id="IDBackend">
                        <Skill>Forge</Skill>
                        <Skill>Gradle</Skill>
                        <Skill>Java</Skill>
                    </SkillGroup>
                    <SkillGroup id="IDPractical">
                        <Skill>Aseprite</Skill>
                        <Skill>Eclipse</Skill>
                        <Skill>IntelliJ</Skill>
                        <Skill>Mentoring</Skill>
                        <Skill>Paint.net</Skill>
                        <Skill>Slack</Skill>
                        <Skill>Troubleshooting</Skill>
                        <Skill>Zoom</Skill>
                    </SkillGroup>
                </Skills>
                <ProfessionalSummary>
                    <li>Delivered high quality instruction to a class of students between ages 8 and 14 in an online remote setting.</li>
                    <li>Created course outlines and lesson plans to teach young students programming fundamentals, Java, and Minecraft mod making.</li>
                    <li>Worked with students to troubleshoot and debug code, fostering a supportive and engaging learning environment.</li>
                    <li>Provided mentorship and guidance to students, encouraging them to explore their creativity and problem-solving skills.</li>
                </ProfessionalSummary>
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
                <Company><WebLink href="https://www.facebook.com/NovaGamesBrick/">Nova Games</WebLink></Company>
                <Location>Brick, NJ</Location>
            </CardTitle>
            <CardBody>
                <Skills>
                    <SkillGroup id="NovaPractical">
                        <Skill>Customer Service</Skill>
                        <Skill>Cleanliness</Skill>
                        <Skill>Event Management</Skill>
                        <Skill>Excel</Skill>
                        <Skill>Google Sheets</Skill>
                        <Skill>Inventory Management</Skill>
                        <Skill>Organization</Skill>
                        <Skill>Stocking</Skill>
                    </SkillGroup>
                </Skills>
                <ProfessionalSummary>
                    <li>Conducted sales transactions, buying and selling collectible cards and merchandise, and maintained accurate daily transaction records using spreadsheets.</li>
                    <li>Organized and facilitated tournaments for popular card games, including Magic: The Gathering, Yu-Gi-Oh!, and Dragon Ball Super, to enhance customer engagement and drive repeat business.</li>
                    <li>Created visually appealing displays of cards and goods to attract customer attention and boost sales.</li>
                    <li>Maintained a clean, organized, and welcoming store environment, managing both the counter and play areas to optimize customer experience.</li>
                </ProfessionalSummary>
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
                <Company><WebLink href="https://jenkinsons.com/amusement-park/">Jenkinson&#39;s Ride Park</WebLink></Company>
                <Location>Point Pleasant Beach, NJ</Location>
            </CardTitle>
            <CardBody>
                <Skills>
                    <SkillGroup id="JenksPractical">
                        <Skill>Amusement Operation</Skill>
                        <Skill>Attention to Detail</Skill>
                        <Skill>Child Safety</Skill>
                        <Skill>Currency Handling</Skill>
                        <Skill>Customer Service</Skill>
                    </SkillGroup>
                </Skills>
                <ProfessionalSummary>
                    <li>Ensured the safety of children and adults riding amusements by enforcing strict safety standards.</li>
                    <li>Passed over 20 tests on the unique safety standards of each amusement after a brief learning period.</li>
                    <li>Operated and controlled unique functions of over 20 amusements to ensure correct and safe functionality.</li>
                    <li>Allowed patrons to enter the amusement only after checking the amusement requirements of height and weight, as well as collecting a number of credits unique to each ride.</li>
                </ProfessionalSummary>
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
                <Company><WebLink href="https://www.monmouth.edu/">Monmouth University</WebLink></Company>
                <Location>Long Branch, NJ</Location>
            </CardTitle>
            <CardBody>
                <Skills>
                    <SkillGroup id="MSRPFrontend">
                        <Skill>Unity UI Design</Skill>
                    </SkillGroup>
                    <SkillGroup id="MSRPBackend">
                        <Skill>C#</Skill>
                        <Skill>Oculus Integration SDK</Skill>
                        <Skill>OVRPlugin</Skill>
                    </SkillGroup>
                    <SkillGroup id="MSRPPractical">
                        <Skill>Communication</Skill>
                        <Skill>Public Speaking</Skill>
                        <Skill>Research</Skill>
                        <Skill>Teamwork</Skill>
                        <Skill>Unity</Skill>
                        <Skill>VR</Skill>
                    </SkillGroup>
                </Skills>
                <ProfessionalSummary>
                    <li>Created a Virtual Reality simulation of the Barnegat Bay that portrayed the effects of natural variances in the climate as well as the unnatural effects of human interference.</li>
                    <li>Simulated the environment and different environmental variables such as temperature, turbidity, and dissolved oxygen, in addition to over 10 species of wildlife residing in the Bay.</li>
                    <li>Conducted research within a team of associates across 6 weeks to gather data about the environmental factors and effects and develop an accurate and engaging simulation.</li>
                    <li>Presented the research and simulation at a final symposium with over 200 attendants, including both other staff and researchers, as well as family members.</li>
                    <li>More about the project <WebLink href="http://bit.ly/MonmouthSRPBBSim">here</WebLink> and in <WebLink href="/projects">projects</WebLink></li>
                </ProfessionalSummary>
            </CardBody>
        </Card>       
    );
}

export const StemPlus = () => {
    return (
        <Card>
            <CardTitle>
                <Date>January 2018 - May 2018</Date>
                <JobTitle>Assistant Teacher</JobTitle>
                <Company><WebLink href="https://www.facebook.com/STEMplusAcademy/">Stem+ Academy</WebLink></Company>
                <Location>Point Pleasant Beach, NJ</Location>
            </CardTitle>
            <CardBody>
                <Skills>
                    <SkillGroup id="SPPractical">
                        <Skill>Communication</Skill>
                        <Skill>Customer Service</Skill>
                        <Skill>Event Management</Skill>
                        <Skill>LEGO Mindstorms EV3</Skill>
                        <Skill>FIRST LEGO League</Skill>
                        <Skill>Mentoring</Skill>
                        <Skill>Organization</Skill>
                    </SkillGroup>
                </Skills>
                <ProfessionalSummary>
                    <li>Assisted in teaching students between the ages of 6 and 12 how to build and program to compete in the FIRST LEGO League challenge using LEGO Mindstorms EV3.</li>
                    <li>Set up and managed birthday parties to faciliate a safe and educational environment for the students.</li>
                </ProfessionalSummary>
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
        <div className="">
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

const ProfessionalSummary = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <Expander startsOpen={true} header="Professional Summary">
            <ul className="list-disc pt-2">
                {children}
            </ul>
        </Expander>
    );
}