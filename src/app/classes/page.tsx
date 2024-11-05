const Classes = () => {
    return (
        <div className="flex flex-col text-center text-slate-200 py-1">
            <h1 className="text-6xl p-1">Stevens Institute of Technology</h1>
            <h2 className="text-4xl p-1">Bachelor of Science in Computer Science</h2>
            <h3 className="text-xl p-1 pb-3">Attended from August 2020 to December 2022 - Graduated 3 semesters (1.5 years) early</h3>
            <div className="grid grid-cols-1 grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-5 xl:grid-rows-1 gap-4 px-2 ">
                {/* TODO: implement some cool way to show what skills were in what classes */}
                <Semester>
                    <SemesterTitle>Semester 1 - Fall 2020</SemesterTitle>
                    <Element>MA 124 - Calculus of Two Variables</Element>
                    <Element>CS 101 - Research and Entrepreneurship in Computing</Element>
                    <Element>CS 115 - Introduction to Computer Science</Element>
                    <Element>CS 135 - Discrete Structures</Element>
                    <Element>CS 146 - Introduction to Web Programming and Project Development</Element>
                    <Element>CAL 103 - Writing and Communications Colloquium</Element>
                </Semester>
                <Semester>
                    <SemesterTitle>Semester 2 - Spring 2021</SemesterTitle>
                    <Element>CS 284 - Data Structures</Element>
                    <Element>PEP 112 - Electricity and Magnetism</Element>
                    <Element>PEP 221 - Physics Lab I for Scientists</Element>
                    <Element>CAL 105 - CAL Colloquium: Knowledge, Nature, Culture</Element>
                    <Element>CS 545 - Human-Computer Interaction</Element>
                    <Element>CS 546 - Web Programming I</Element>
                    <Element>MA 222 - Probability and Statistics</Element>
                </Semester>
                <Semester>
                    <SemesterTitle>Semester 3 - Fall 2021</SemesterTitle>
                    <Element>CS 385 - Algorithms</Element>
                    <Element>CS 382 - Computer Architecture and Organization</Element>
                    <Element>MA 331 - Intermediate Statistics</Element>
                    <Element>HSS 371 - Computers and Society</Element>
                    <Element>CS 423 - Senior Design I</Element>
                    <Element>CS 554 - Web Programming II</Element>
                </Semester>
                <Semester>
                    <SemesterTitle>Semester 4 - Spring 2022</SemesterTitle>
                    <Element>CS 392 - Systems Programming</Element>
                    <Element>CS 496 - Principles of Programming Languages</Element>
                    <Element>CS 424 - Senior Design II</Element>
                    <Element>CS 553 - Introduction to Text Mining/Nat. Lang Proc</Element>
                    <Element>CS 555 - Agile Methods for Software Dev.</Element>
                    <Element>MA 232 - Linear Algebra</Element>
                </Semester>
                <Semester className="col-span-1 md:col-span-2 xl:col-span-1">
                    <SemesterTitle>Semester 5 - Fall 2022</SemesterTitle>
                    <Element>CS 396 - Security, Privacy, and Society</Element>
                    <Element>CS 334 - Theory of Computation</Element>
                    <Element>CS 497 - Independent Study with Dr. Bonelli</Element>
                    <Element>CS 497 - Independent Study with Dr. Hao</Element>
                    <Element>CS 561 - Database Management Systems I</Element>
                </Semester>
            </div>
        </div>
    )
}

export default Classes;

const Semester = (
    {
        children,
        className,
    }: Readonly<{
        children: React.ReactNode;
        className?: string;
    }>
) => {
    return (
        <div className={"flex flex-col flex-grow border border-slate-400 rounded-xl p-2 " + (className ? className : '')}>
            {children}
        </div>
    );
}

const SemesterTitle = (
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) => {
    return (
        <h2 className="p-1">
            {children}
        </h2>
    );
}

const Element = (
    {
        children,
    }: Readonly<{
        children?: React.ReactNode;
    }>
) => {
    return (
        <div className="border border-slate-500 text-slate-300 p-1 text-wrap">
            {children}
        </div>
    );
}