import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, PlayCircle, Link as LinkIcon, Sun, Moon, Code2 } from "lucide-react";

const courses = [
  { title: "Discover the origins and evolution of PL/I.", id: "pl1-origins", simple: true },
  { title: "Learn how CICS began and evolved.", id: "cics-evolution", simple: true },
  { title: "Setup Guide PL/I & CICS", id: "setup-guide" },
  { title: "PL/I Basics", id: "pl1-basics" },
  { title: "CICS Basics", id: "cics-basics" },
  { title: "PL/I With CICS Basic", id: "pl1-cics-basic" },
  { title: "PL/I With CICS Advanced", id: "pl1-cics-advanced" },
  { title: "Master PL/I and CICS integration.", id: "master-integration" },
];

const defaultChapters = [
  { title: "Introduction", parts: ["Theory", "Exercise", "Final Quiz"] },
  { title: "Core Concepts", parts: ["Theory", "Exercise", "Final Quiz"] },
  { title: "Advanced Topics", parts: ["Theory", "Exercise", "Final Quiz"] },
];

const simpleChapters = [
  { title: "Overview", parts: ["Theory", "Final Quiz"] },
];

// Custom hook for dark mode
function useDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
}

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <header className="flex justify-between items-center px-6 md:px-8 py-4 md:py-5 border-b border-gray-200/60 dark:border-gray-800/60 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-shadow duration-200">
            <Code2 className="text-white" size={22} />
          </div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Mainframe Academy
          </h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          aria-label="Toggle dark mode"
          type="button"
        >
          {darkMode ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-indigo-600" />}
        </button>
      </header>

      {!selectedCourse ? (
        <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                Learn PL/I and CICS
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium">the Modern Way</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCourse(course);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${course.title} course`}
                className="group relative p-6 md:p-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-gray-200/80 dark:border-gray-800/80 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 animate-fade-in"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-indigo-500/5 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="text-white" size={18} />
                  </div>
                  <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    Click to explore this course.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <CoursePage course={selectedCourse} goBack={() => setSelectedCourse(null)} />
      )}
    </div>
  );
}

function CoursePage({ course, goBack }) {
  const [openChapter, setOpenChapter] = useState(null);
  const chapters = course.simple ? simpleChapters : defaultChapters;

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30">
      <aside className="w-64 md:w-72 lg:w-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl p-6 md:p-8 flex-shrink-0 overflow-y-auto border-r border-gray-200/60 dark:border-gray-800/60">
        <button
          onClick={goBack}
          className="group flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-6 md:mb-8 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg px-2 py-1"
          aria-label="Go back to courses"
        >
          <ChevronDown size={16} className="rotate-90 group-hover:-translate-x-1 transition-transform" />
          Back to Courses
        </button>
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-800 dark:text-gray-100 leading-tight">
          {course.title}
        </h2>
        <div className="space-y-2">
          {chapters.map((chapter, i) => (
            <div key={i} className="mb-2">
              <button
                onClick={() => setOpenChapter(openChapter === i ? null : i)}
                aria-expanded={openChapter === i}
                aria-controls={`chapter-${i}`}
                className={`w-full flex justify-between items-center text-left font-semibold px-3 md:px-4 py-2.5 md:py-3 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                  openChapter === i
                    ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <span className="text-sm md:text-base">{chapter.title}</span>
                {openChapter === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openChapter === i && (
                <ul id={`chapter-${i}`} className="mt-2 md:mt-3 ml-2 md:ml-4 space-y-1.5 md:space-y-2">
                  {chapter.parts.map((part, j) => (
                    <li
                      key={j}
                      className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          // Handle part click here if needed
                        }
                      }}
                    >
                      {part}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-gray-900 dark:text-gray-100">
            {course.title}
          </h1>
          <p className="mb-8 md:mb-12 text-gray-600 dark:text-gray-400 leading-relaxed text-base md:text-lg font-medium max-w-3xl">
            Welcome to this module. Dive into practical exercises, detailed theory, and examples drawn from real-world mainframe environments.
          </p>

          <div 
            className="relative aspect-video bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 md:mb-12 shadow-xl border border-gray-300/50 dark:border-gray-700/50 overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            role="button"
            tabIndex={0}
            aria-label="Video player placeholder"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                // Handle video play here if needed
              }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.05)_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
            <PlayCircle size={64} className="md:hidden text-gray-500 dark:text-gray-400 relative z-10 group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300 drop-shadow-lg" />
            <PlayCircle size={88} className="hidden md:block text-gray-500 dark:text-gray-400 relative z-10 group-hover:scale-110 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300 drop-shadow-lg" />
          </div>

          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/60 dark:border-gray-800/60">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800 dark:text-gray-100">
              Resources
            </h2>
            <ul className="space-y-3 md:space-y-4">
              <li 
                className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-950/50 dark:hover:to-cyan-950/50 cursor-pointer transition-all duration-200 border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                role="link"
                tabIndex={0}
                aria-label="PL/I Documentation link"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    // Handle link click here
                  }
                }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-200">
                  <LinkIcon size={18} className="md:hidden text-white" />
                  <LinkIcon size={20} className="hidden md:block text-white" />
                </div>
                <span className="text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  PL/I Documentation
                </span>
              </li>
              <li 
                className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-950/50 dark:hover:to-cyan-950/50 cursor-pointer transition-all duration-200 border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                role="link"
                tabIndex={0}
                aria-label="CICS Developer Guide link"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    // Handle link click here
                  }
                }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-200">
                  <LinkIcon size={18} className="md:hidden text-white" />
                  <LinkIcon size={20} className="hidden md:block text-white" />
                </div>
                <span className="text-base md:text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  CICS Developer Guide
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
