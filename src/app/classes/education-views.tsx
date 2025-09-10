// Generated with gemini-2.5-pro-exp-03-25 through Cursor
'use client';
import { useState, useMemo, useEffect } from 'react';

// ========== SHARED INTERFACE ==========
export interface CourseInfo {
  id?: string | number; // Optional ID for unique keying if available
  year: number;
  name: string;
  institution: string;
  semester?: string; // e.g., "Fall 2020", "AP/High School", "Summer 2025 (Session 1: 3/24-5/14)"
  // No 'details' property as per previous refactor
}

// ========== PROPS FOR VIEW COMPONENTS (Consolidated) ==========
interface EducationDataProps { // RENAMED & CONSOLIDATED: Was ViewProps and ChronologicalViewProps
  stevensCourses: CourseInfo[];
  occCourses: CourseInfo[];
  ppbhsCourses: CourseInfo[];
}

// ========== DATA DEFINITIONS & HELPERS (Chronological & Institution Views) ==========

// Defines the order of institutions for sorting and display
const institutionPreference: Record<string, number> = {
  "Stevens Institute of Technology": 1,
  "Ocean County College": 2,
  "Point Pleasant Boro High School": 3,
  "Other": 4, // Fallback for any other institution
};

// Defines the order of semesters for sorting
const semesterOrder: Record<string, number> = {
  'AP': 0,
  'High School': 0.1, // Slightly after AP to group them together if year is same
  'Spring': 1,
  'Summer': 2,
  'Summer (Session 1)': 2.1,
  'Summer (Session 2)': 2.2,
  'Summer (Session 3)': 2.3,
  'Fall': 3,
  'Other': 99, // Fallback for any unclassified semester (guaranteed number)
};

// Helper to get a sortable key from a semester string
const getSemesterSortKey = (semester: string | undefined): number => {
  if (!semester) return semesterOrder.Other!;
  
  if (semester.startsWith("Summer (Session")) {
    return (semesterOrder[semester] ?? semesterOrder.Summer ?? semesterOrder.Other)!;
  }
  
  const parts = semester.split(' ');
  const generalSemesterKey = parts[0]; 

  if (!generalSemesterKey) return semesterOrder.Other!;

  return (semesterOrder[generalSemesterKey] ?? semesterOrder.Other)!;
};


// Helper to get a display and sorting key for a semester from a CourseInfo object
const getSemesterKey = (course: CourseInfo): string => {
  if (course.institution === "Point Pleasant Boro High School") {
    return course.name.startsWith("AP") ? "AP" : "High School";
  }
  return course.semester ?? "Other"; // Fallback for courses without a semester
};

// ========== REUSABLE NAVIGATION HEADER COMPONENT ==========
interface NavigationViewHeaderProps {
  title: string | undefined;
  titleFallback?: string;
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
}

const NavigationViewHeader: React.FC<NavigationViewHeaderProps> = ({
  title,
  titleFallback = "Loading...",
  onPrev,
  onNext,
  disablePrev = false,
  disableNext = false,
}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-5xl mx-auto my-6 px-4">
      <button
        onClick={onPrev}
        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-2xl transition-colors disabled:opacity-50 flex-shrink-0 self-stretch flex items-center justify-center"
        disabled={disablePrev}
      >
        <span>&larr;</span>
      </button>
      <h2 className="text-5xl font-bold text-slate-100 tracking-wider select-none text-center flex-grow mx-4">
        {title ?? titleFallback}
      </h2>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-2xl transition-colors disabled:opacity-50 flex-shrink-0 self-stretch flex items-center justify-center"
        disabled={disableNext}
      >
        <span>&rarr;</span>
      </button>
    </div>
  );
};

// ========== REUSABLE TITLED COURSE GROUP BLOCK COMPONENT ==========
interface TitledCourseGroupBlockProps {
  title: string;
  courses: CourseInfo[];
  groupByInstitution?: boolean; // If true, group courses by institution, otherwise list directly
  blockClasses?: string;        // Classes for the root div of this block
  // institutionPreference is globally available, so not passed as prop for now
}

const TitledCourseGroupBlock: React.FC<TitledCourseGroupBlockProps> = ({
  title,
  courses,
  groupByInstitution = false,
  blockClasses = "",
}) => {
  if (!courses || courses.length === 0) return null;

  return (
    <div className={`bg-slate-850 p-4 rounded-xl shadow-lg border border-slate-700 ${blockClasses}`}>
      <h3 className="text-2xl font-semibold text-slate-200 mb-3 pb-2 border-b border-slate-700">{title}</h3>
      <div className="space-y-3 pr-1">
        {groupByInstitution ? (
          (() => {
            const coursesByInstitution: Record<string, CourseInfo[]> = {};
            courses.forEach(course => {
              coursesByInstitution[course.institution] ??= [];
              coursesByInstitution[course.institution]!.push(course);
            });

            const sortedInstitutions = Object.keys(coursesByInstitution).sort((instA, instB) => {
              const preferenceA = (institutionPreference[instA] ?? institutionPreference.Other)!;
              const preferenceB = (institutionPreference[instB] ?? institutionPreference.Other)!;
              if (preferenceA !== preferenceB) return preferenceA - preferenceB;
              return instA.localeCompare(instB);
            });

            return sortedInstitutions.map(instName => {
              const coursesForInstitution = coursesByInstitution[instName];
              if (!coursesForInstitution || coursesForInstitution.length === 0) return null;
              return (
                <div key={instName}>
                  <h4 className="text-lg font-medium text-slate-300 mb-1.5">{instName}</h4>
                  <div className="space-y-2">
                    {coursesForInstitution
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map(course => <CourseCard key={course.name} course={course} />)
                    }
                  </div>
                </div>
              );
            });
          })()
        ) : (
          <div className="space-y-2"> {/* Consistent structure with grouped view */}
            {courses
              .sort((a, b) => a.name.localeCompare(b.name)) // Default sort for non-grouped courses
              .map(course => <CourseCard key={course.name} course={course} />)
            }
          </div>
        )}
      </div>
    </div>
  );
};

// ========== CHRONOLOGICAL VIEW COMPONENT ==========

const ChronologicalView: React.FC<EducationDataProps> = ({ stevensCourses, occCourses, ppbhsCourses }) => {
  const allCoursesCombined = useMemo(() => [
    ...stevensCourses,
    ...occCourses,
    ...ppbhsCourses,
  ], [stevensCourses, occCourses, ppbhsCourses]);

  const coursesByYearAndSemester = useMemo(() => {
    return allCoursesCombined.reduce((acc, course) => {
      const year = course.year;
      const semesterKeyToGroup = getSemesterKey(course); 
      
      acc[year] ??= {};
      acc[year][semesterKeyToGroup] ??= [];
      acc[year][semesterKeyToGroup].push(course);
      return acc;
    }, {} as Record<number, Record<string, CourseInfo[]>>);
  }, [allCoursesCombined]);

  const sortedYears = useMemo(() => Object.keys(coursesByYearAndSemester).map(Number).sort((a, b) => a - b), [coursesByYearAndSemester]);
  
  const [currentYearIndex, setCurrentYearIndex] = useState(() => {
    return sortedYears.length > 0 ? sortedYears.length - 1 : 0;
  });

  useEffect(() => {
    const newMaxIndex = sortedYears.length - 1;
    if (sortedYears.length > 0) {
        if (currentYearIndex > newMaxIndex || currentYearIndex < 0 ) { 
             setCurrentYearIndex(newMaxIndex); 
        }
    } else {
        setCurrentYearIndex(0); 
    }
  }, [sortedYears, currentYearIndex]);

  const handlePrevYear = () => {
    setCurrentYearIndex(prev => 
      prev > 0 ? prev - 1 : (sortedYears.length > 0 ? sortedYears.length - 1 : 0)
    );
  };
  
  const handleNextYear = () => {
    setCurrentYearIndex(prev => 
      prev < sortedYears.length - 1 ? prev + 1 : 0
    );
  };

  const displayedYear = sortedYears.length > 0 && currentYearIndex >= 0 && currentYearIndex < sortedYears.length ? sortedYears[currentYearIndex] : undefined;
  const semestersAndCoursesForDisplayedYear = displayedYear !== undefined ? (coursesByYearAndSemester[displayedYear] ?? {}) : {};
  const sortedSemesterKeysForDisplay = Object.keys(semestersAndCoursesForDisplayedYear)
    .sort((semA, semB) => getSemesterSortKey(semA) - getSemesterSortKey(semB));
  const numberOfActiveSemesters = sortedSemesterKeysForDisplay.length;

  return (
    <div className="py-1">
      <NavigationViewHeader 
        title={displayedYear?.toString()}
        titleFallback={sortedYears.length > 0 ? 'Loading...' : 'No Data'}
        onPrev={handlePrevYear}
        onNext={handleNextYear}
        disablePrev={sortedYears.length <= 1}
        disableNext={sortedYears.length <= 1}
      />
      <div className="flex flex-col items-center w-full">
        <div className={`flex pb-4 ${numberOfActiveSemesters > 3 ? 'overflow-x-auto scrollbar-thin scrollbar-track-slate-800 space-x-4' : 'flex-wrap gap-4'} w-full px-2`}>
          {sortedSemesterKeysForDisplay.map(semesterKey => {
            const coursesInSemester = semestersAndCoursesForDisplayedYear[semesterKey] ?? []; 
            if (coursesInSemester.length === 0) return null;

            let columnWidthClasses = "";
            if (numberOfActiveSemesters === 1) {
                columnWidthClasses = "w-full min-w-[300px]";
            } else if (numberOfActiveSemesters === 2) {
                columnWidthClasses = "w-full sm:flex-1 min-w-[280px]";
            } else if (numberOfActiveSemesters === 3) {
                columnWidthClasses = "w-full md:flex-1 min-w-[280px]";
            } else { // numberOfActiveSemesters > 3 (scrolling case)
                columnWidthClasses = "flex-shrink-0 w-72 md:w-80 lg:w-96";
            }

            let displaySemesterTitle = semesterKey;
            if (displayedYear === 2025 && semesterKey.startsWith("Summer (Session")) {
                const representativeCourse = coursesInSemester.find(c => 
                    c.institution === "Ocean County College" && 
                    (c.semester?.startsWith(semesterKey) ?? false)
                );
                if (representativeCourse?.semester) {
                    displaySemesterTitle = representativeCourse.semester;
                }
            }

            return (
              <TitledCourseGroupBlock
                key={semesterKey}
                title={displaySemesterTitle}
                courses={coursesInSemester}
                groupByInstitution={true}
                blockClasses={columnWidthClasses}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ========== INSTITUTION-BASED VIEW COMPONENT ==========
// Helper component for styled course cards
const CourseCard: React.FC<{ course: CourseInfo }> = ({ course }) => (
    <div className="border border-slate-600 text-slate-100 rounded-lg p-3 bg-slate-750 hover:bg-slate-700 transition-colors shadow-md text-wrap">
        <p className="font-semibold text-base text-slate-50 mb-0.5">{course.name}</p>
        {/* If other details from course (like semester, year, or parts of name for AP scores) are needed, add here */}
    </div>
);

const InstitutionView = ({ stevensCourses, occCourses, ppbhsCourses }: EducationDataProps) => {
    const institutionDisplayOrder = [
        "Stevens Institute of Technology", 
        "Ocean County College", 
        "Point Pleasant Boro High School"
    ];
    const [currentInstitutionIndex, setCurrentInstitutionIndex] = useState(0);

    const handlePrevInstitution = () => {
        setCurrentInstitutionIndex(prevIndex => 
            prevIndex > 0 ? prevIndex - 1 : institutionDisplayOrder.length - 1
        );
    };

    const handleNextInstitution = () => {
        setCurrentInstitutionIndex(prevIndex => 
            prevIndex < institutionDisplayOrder.length - 1 ? prevIndex + 1 : 0
        );
    };

    const currentInstitutionName = institutionDisplayOrder[currentInstitutionIndex];

    // Group Stevens courses by semester
    const stevensBySemester = stevensCourses.reduce((acc, course) => {
        const key = course.semester ?? "Unknown Semester";
        acc[key] ??= [];
        acc[key].push(course);
        return acc;
    }, {} as Record<string, CourseInfo[]>);
    const stevensSemesterOrder = ["Fall 2020", "Spring 2021", "Fall 2021", "Spring 2022", "Fall 2022"];

    // Group OCC courses by semester
    const occBySemester = occCourses.reduce((acc, course) => {
        const key = course.semester ?? "Unknown Semester";
        acc[key] ??= [];
        acc[key].push(course);
        return acc;
    }, {} as Record<string, CourseInfo[]>);
    const occSemesterOrder = [
      "Fall 2019", "Summer 2021", 
      "Summer 2025 (Session 1: 3/24-5/14)", 
      "Summer 2025 (Session 2: 5/19-7/10)", 
      "Summer 2025 (Session 3: 7/11-8/30)"
    ];

    // Group PPBHS courses by year (using semester field which is "AP/High School")
    // For PPBHS, we'll display each year as a block, similar to original static page.
    const ppbhsByYear = ppbhsCourses.reduce((acc, course) => {
        const key = course.year.toString();
        acc[key] ??= [];
        acc[key].push(course);
        return acc;
    }, {} as Record<string, CourseInfo[]>);
    const ppbhsYearOrder = Object.keys(ppbhsByYear).sort((a,b) => parseInt(a) - parseInt(b));

    const renderInstitutionContent = () => {
        // This function now only renders content *below* the main H1 and arrows
        switch (currentInstitutionName) {
            case "Stevens Institute of Technology":
                return (
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-4xl p-1">Bachelor of Science in Computer Science</h2>
                        <h3 className="text-xl p-1 pb-3">Attended from August 2020 to December 2022 - Graduated 3 semesters (1.5 years) early</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4 px-2 mt-4 w-full">
                            {stevensSemesterOrder.map((semester, index) => {
                                if (!stevensBySemester[semester]) return null;
                                let conditionalBlockClasses = "";
                                if (index === stevensSemesterOrder.length - 1 && stevensSemesterOrder.length % 2 !== 0) {
                                    conditionalBlockClasses = "lg:col-span-2 xl:col-span-1";
                                }
                                return (
                                    <TitledCourseGroupBlock 
                                        key={semester} 
                                        title={semester} 
                                        courses={stevensBySemester[semester]}
                                        groupByInstitution={false}
                                        blockClasses={conditionalBlockClasses}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            case "Ocean County College":
                return (
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-4xl p-1">Associate of Science in Business Administration</h2>
                        <h3 className="text-xl p-1 pb-3">Coursework from 2019, 2021, and 2025</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4 px-2 mt-4 w-full">
                            {occSemesterOrder.map((semester, index) => {
                                if (!occBySemester[semester]) return null;
                                let conditionalBlockClasses = "";
                                if (index === occSemesterOrder.length - 1 && occSemesterOrder.length % 2 !== 0) {
                                    conditionalBlockClasses = "lg:col-span-2 xl:col-span-1";
                                }
                                return (
                                    <TitledCourseGroupBlock 
                                        key={semester} 
                                        title={semester} 
                                        courses={occBySemester[semester]}
                                        groupByInstitution={false}
                                        blockClasses={conditionalBlockClasses}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            case "Point Pleasant Boro High School":
                return (
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-4xl p-1">AP Coursework & Scores</h2>
                        <h3 className="text-xl p-1 pb-3">Advanced Placement examinations taken from 2017-2020</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 mt-4 w-full">
                            {ppbhsYearOrder.map((year, index) => {
                                if (!ppbhsByYear[year]) return null;
                                let conditionalBlockClasses = "";
                                if (index === ppbhsYearOrder.length - 1 && ppbhsYearOrder.length % 2 !== 0) {
                                    conditionalBlockClasses = "sm:col-span-2 md:col-span-auto";
                                }
                                return (
                                    <TitledCourseGroupBlock 
                                        key={year} 
                                        title={year} 
                                        courses={ppbhsByYear[year]}
                                        groupByInstitution={false}
                                        blockClasses={conditionalBlockClasses}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col text-center text-slate-200 py-1">
            <NavigationViewHeader 
                title={currentInstitutionName}
                onPrev={handlePrevInstitution}
                onNext={handleNextInstitution}
                // For InstitutionView, prev/next buttons are never disabled as it loops.
            />
            {renderInstitutionContent()} 
        </div>
    );
};


// ========== VIEW MANAGER ==========
const EducationViewManager = ({ stevensCourses, occCourses, ppbhsCourses }: EducationDataProps) => {
  const [currentView, setCurrentView] = useState<'institution' | 'chronological'>('institution');

  return (
    <div className="py-1 w-full">
      {/* Tab Navigation - Bar spans full width, buttons are centered within */}
      <div className="w-full mb-8 border-b border-slate-700">
        <div className="flex justify-center">
          <button 
            onClick={() => setCurrentView('institution')}
            className={`px-6 py-3 text-lg font-semibold transition-colors focus:outline-none 
              ${currentView === 'institution' 
                ? 'text-sky-400 border-b-2 border-sky-400' 
                : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'
              }
            `}
          >
            Institution View
          </button>
          <button 
            onClick={() => setCurrentView('chronological')}
            className={`px-6 py-3 text-lg font-semibold transition-colors focus:outline-none 
              ${currentView === 'chronological' 
                ? 'text-sky-400 border-b-2 border-sky-400' 
                : 'text-slate-400 hover:text-slate-200 border-b-2 border-transparent'
              }
            `}
          >
            Chronological View
          </button>
        </div>
      </div>

      {/* Conditional Rendering based on active tab */}
      {currentView === 'institution' ? (
        <InstitutionView 
            stevensCourses={stevensCourses} 
            occCourses={occCourses} 
            ppbhsCourses={ppbhsCourses} 
        />
      ) : (
        <ChronologicalView 
            stevensCourses={stevensCourses} 
            occCourses={occCourses} 
            ppbhsCourses={ppbhsCourses} 
        />
      )}
    </div>
  );
};

export default EducationViewManager; 