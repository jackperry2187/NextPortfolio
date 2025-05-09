// Generated with gemini-2.5-pro-exp-03-25 through Cursor
import EducationViewManager from './education-views';

const Classes = () => {

    const stevensCourses = [
        // Semester 1 - Fall 2020
        { year: 2020, name: "MA 124 - Calculus of Two Variables", institution: "Stevens Institute of Technology", semester: "Fall 2020" },
        { year: 2020, name: "CS 101 - Research and Entrepreneurship in Computing", institution: "Stevens Institute of Technology", semester: "Fall 2020" },
        { year: 2020, name: "CS 115 - Introduction to Computer Science", institution: "Stevens Institute of Technology", semester: "Fall 2020" },
        { year: 2020, name: "CS 135 - Discrete Structures", institution: "Stevens Institute of Technology", semester: "Fall 2020" },
        { year: 2020, name: "CS 146 - Introduction to Web Programming and Project Development", institution: "Stevens Institute of Technology", semester: "Fall 2020" },
        { year: 2020, name: "CAL 103 - Writing and Communications Colloquium", institution: "Stevens Institute of Technology", semester: "Fall 2020" },
        // Semester 2 - Spring 2021
        { year: 2021, name: "CS 284 - Data Structures", institution: "Stevens Institute of Technology", semester: "Spring 2021" },
        { year: 2021, name: "PEP 112 - Electricity and Magnetism", institution: "Stevens Institute of Technology", semester: "Spring 2021" },
        { year: 2021, name: "PEP 221 - Physics Lab I for Scientists", institution: "Stevens Institute of Technology", semester: "Spring 2021" },
        { year: 2021, name: "CAL 105 - CAL Colloquium: Knowledge, Nature, Culture", institution: "Stevens Institute of Technology", semester: "Spring 2021" },
        { year: 2021, name: "CS 545 - Human-Computer Interaction", institution: "Stevens Institute of Technology", semester: "Spring 2021" },
        { year: 2021, name: "CS 546 - Web Programming I", institution: "Stevens Institute of Technology", semester: "Spring 2021" },
        { year: 2021, name: "MA 222 - Probability and Statistics", institution: "Stevens Institute of Technology", semester: "Spring 2021" },
        // Semester 3 - Fall 2021
        { year: 2021, name: "CS 385 - Algorithms", institution: "Stevens Institute of Technology", semester: "Fall 2021" },
        { year: 2021, name: "CS 382 - Computer Architecture and Organization", institution: "Stevens Institute of Technology", semester: "Fall 2021" },
        { year: 2021, name: "MA 331 - Intermediate Statistics", institution: "Stevens Institute of Technology", semester: "Fall 2021" },
        { year: 2021, name: "HSS 371 - Computers and Society", institution: "Stevens Institute of Technology", semester: "Fall 2021" },
        { year: 2021, name: "CS 423 - Senior Design I", institution: "Stevens Institute of Technology", semester: "Fall 2021" },
        { year: 2021, name: "CS 554 - Web Programming II", institution: "Stevens Institute of Technology", semester: "Fall 2021" },
        // Semester 4 - Spring 2022
        { year: 2022, name: "CS 392 - Systems Programming", institution: "Stevens Institute of Technology", semester: "Spring 2022" },
        { year: 2022, name: "CS 496 - Principles of Programming Languages", institution: "Stevens Institute of Technology", semester: "Spring 2022" },
        { year: 2022, name: "CS 424 - Senior Design II", institution: "Stevens Institute of Technology", semester: "Spring 2022" },
        { year: 2022, name: "CS 553 - Introduction to Text Mining/Nat. Lang Proc", institution: "Stevens Institute of Technology", semester: "Spring 2022" },
        { year: 2022, name: "CS 555 - Agile Methods for Software Dev.", institution: "Stevens Institute of Technology", semester: "Spring 2022" },
        { year: 2022, name: "MA 232 - Linear Algebra", institution: "Stevens Institute of Technology", semester: "Spring 2022" },
        // Semester 5 - Fall 2022
        { year: 2022, name: "CS 396 - Security, Privacy, and Society", institution: "Stevens Institute of Technology", semester: "Fall 2022" },
        { year: 2022, name: "CS 334 - Theory of Computation", institution: "Stevens Institute of Technology", semester: "Fall 2022" },
        { year: 2022, name: "CS 497 - Independent Study with Dr. Bonelli", institution: "Stevens Institute of Technology", semester: "Fall 2022" },
        { year: 2022, name: "CS 497 - Independent Study with Dr. Hao", institution: "Stevens Institute of Technology", semester: "Fall 2022" },
        { year: 2022, name: "CS 561 - Database Management Systems I", institution: "Stevens Institute of Technology", semester: "Fall 2022" },
    ];

    const occCourses = [
        // Fall 2019
        { year: 2019, name: "MATH 266 - Calculus II", institution: "Ocean County College", semester: "Fall 2019" },
        // Summer 2021
        { year: 2021, name: "BIOL 161 - General Biology I", institution: "Ocean County College", semester: "Summer 2021" },
        { year: 2021, name: "CHEM 181 - General Chemistry I", institution: "Ocean County College", semester: "Summer 2021" },
        { year: 2021, name: "ECON 151 - Macroeconomic Princ.", institution: "Ocean County College", semester: "Summer 2021" },
        { year: 2021, name: "PSYC 172 - General Psychology", institution: "Ocean County College", semester: "Summer 2021" },
        // Summer 2025: 3/24/25 - 5/14/25
        { year: 2025, name: "COMM 154 - Fund of Public Speaking", institution: "Ocean County College", semester: "Summer 2025 (Session 1: 3/24-5/14)" },
        { year: 2025, name: "CSIT 123 - Integrated Office Software", institution: "Ocean County College", semester: "Summer 2025 (Session 1: 3/24-5/14)" },
        { year: 2025, name: "STSC 150 - Student Success Seminar", institution: "Ocean County College", semester: "Summer 2025 (Session 1: 3/24-5/14)" },
        // Summer 2025: 5/19/25 - 7/10/25
        { year: 2025, name: "ACCT 161 - Principles of Accounting I", institution: "Ocean County College", semester: "Summer 2025 (Session 2: 5/19-7/10)" },
        { year: 2025, name: "BUSN 134 - Principles of Marketing", institution: "Ocean County College", semester: "Summer 2025 (Session 2: 5/19-7/10)" },
        { year: 2025, name: "BUSN 271 - Principles of Management", institution: "Ocean County College", semester: "Summer 2025 (Session 2: 5/19-7/10)" },
        // Summer 2025: 7/11/25 - 8/30/25
        { year: 2025, name: "ACCT 162 - Principles of Accounting II", institution: "Ocean County College", semester: "Summer 2025 (Session 3: 7/11-8/30)" },
        { year: 2025, name: "BUSN 251 - Business Law", institution: "Ocean County College", semester: "Summer 2025 (Session 3: 7/11-8/30)" },
    ];

    const ppbhsCourses = [
        // 2017
        { year: 2017, name: "AP Computer Science A | Score: 4", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
        // 2018
        { year: 2018, name: "AP Computer Science Principles | Score: 4", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
        // 2019
        { year: 2019, name: "AP United States History | Score: 4", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
        { year: 2019, name: "AP English Language and Composition | Score: 4", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
        { year: 2019, name: "AP Calculus AB | Score: 4", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
        { year: 2019, name: "AP Chemistry | Score: 3", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
        // 2020
        { year: 2020, name: "AP Physics C: Mechanics | Score: 4", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
        { year: 2020, name: "AP Microeconomics | Score: 4", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
        { year: 2020, name: "AP English Literature and Composition | Score: 4", institution: "Point Pleasant Boro High School", semester: "AP/High School" },
    ];

    return (
        <EducationViewManager 
            stevensCourses={stevensCourses} 
            occCourses={occCourses} 
            ppbhsCourses={ppbhsCourses} 
        />
    );
}

export default Classes;