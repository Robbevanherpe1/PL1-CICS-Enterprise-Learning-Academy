import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, PlayCircle, Link as LinkIcon, Sun, Moon, Code2, BookOpen, PenTool, CheckCircle } from "lucide-react";

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
  const [openChapter, setOpenChapter] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [selectedPart, setSelectedPart] = useState("Theory");
  const chapters = course.simple ? simpleChapters : defaultChapters;

  // Auto-open first chapter and select first part on mount
  useEffect(() => {
    if (chapters.length > 0) {
      setOpenChapter(0);
      setSelectedChapter(0);
      setSelectedPart(chapters[0].parts[0]);
    }
  }, [course.id]);

  const handlePartClick = (chapterIndex, part) => {
    setSelectedChapter(chapterIndex);
    setSelectedPart(part);
    setOpenChapter(chapterIndex);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30">
      <aside className="w-64 md:w-72 lg:w-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl p-6 md:p-8 flex-shrink-0 h-screen sticky top-0 overflow-y-auto border-r border-gray-200/60 dark:border-gray-800/60">
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
                  {chapter.parts.map((part, j) => {
                    const isActive = selectedChapter === i && selectedPart === part;
                    return (
                      <li
                        key={j}
                        onClick={() => handlePartClick(i, part)}
                        className={`text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-lg cursor-pointer transition-all duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md"
                            : "text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400"
                        }`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handlePartClick(i, part);
                          }
                        }}
                        aria-label={`${chapter.title} - ${part}`}
                      >
                        {part}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {chapters[selectedChapter]?.title} / {selectedPart}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-gray-900 dark:text-gray-100">
            {chapters[selectedChapter]?.title}: {selectedPart}
          </h1>

          {/* Content based on selected part */}
          {selectedPart === "Theory" && (
            <TheoryContent chapter={chapters[selectedChapter]} course={course} />
          )}
          
          {selectedPart === "Exercise" && (
            <ExerciseContent chapter={chapters[selectedChapter]} course={course} />
          )}
          
          {selectedPart === "Final Quiz" && (
            <QuizContent chapter={chapters[selectedChapter]} course={course} />
          )}
        </div>
      </main>
    </div>
  );
}

// Theory Content Component
function TheoryContent({ chapter, course }) {
  return (
    <div className="space-y-6">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/60 dark:border-gray-800/60">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md">
            <BookOpen className="text-white" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Theory Content
          </h2>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Welcome to the theory section for <strong>{chapter.title}</strong> in <strong>{course.title}</strong>.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-6 mb-6 border border-blue-200/50 dark:border-blue-800/50">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Key Concepts</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Understanding the fundamental principles and concepts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Learning the theoretical foundations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Exploring real-world applications and examples</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              This section covers the essential theoretical knowledge you need to master <strong>{chapter.title}</strong>. 
              You'll learn about the core concepts, best practices, and important principles that form the foundation 
              of this topic.
            </p>
            <p>
              Take your time to read through the material carefully. Understanding the theory is crucial before 
              moving on to practical exercises.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/60 dark:border-gray-800/60">
        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Resources</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-950/50 dark:hover:to-cyan-950/50 cursor-pointer transition-all duration-200 border border-blue-200/50 dark:border-blue-800/50">
            <LinkIcon size={18} className="text-blue-600 dark:text-blue-400" />
            <span className="text-base font-semibold text-blue-600 dark:text-blue-400">PL/I Documentation</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-950/50 dark:hover:to-cyan-950/50 cursor-pointer transition-all duration-200 border border-blue-200/50 dark:border-blue-800/50">
            <LinkIcon size={18} className="text-blue-600 dark:text-blue-400" />
            <span className="text-base font-semibold text-blue-600 dark:text-blue-400">CICS Developer Guide</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Exercise Content Component
function ExerciseContent({ chapter, course }) {
  const [code, setCode] = useState(`PROC OPTIONS(MAIN);
/* Your code goes here */
/* Write your solution below */


ENDPROC;`);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("");
    
    // Simulate code execution
    setTimeout(() => {
      if (code.trim().length < 20) {
        setOutput("Error: Code is too short. Please write a complete solution.");
      } else if (code.includes("PROC") && code.includes("ENDPROC")) {
        setOutput("✓ Code compiled successfully!\n✓ Syntax check passed.\n✓ Ready for testing.");
      } else {
        setOutput("Warning: Make sure your code includes PROC and ENDPROC statements.");
      }
      setIsRunning(false);
    }, 1000);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    
    // Simulate answer checking
    setTimeout(() => {
      const hasContent = code.trim().length > 50;
      const hasProc = code.includes("PROC");
      const hasEndProc = code.includes("ENDPROC");
      
      if (hasContent && hasProc && hasEndProc) {
        setTestResult({
          passed: true,
          message: "Congratulations! Your solution looks good.",
          score: 85
        });
      } else {
        setTestResult({
          passed: false,
          message: "Your solution needs more work. Please review the requirements.",
          score: 40
        });
      }
    }, 800);
  };

  const handleReset = () => {
    setCode(`PROC OPTIONS(MAIN);
/* Your code goes here */
/* Write your solution below */


ENDPROC;`);
    setOutput("");
    setIsSubmitted(false);
    setTestResult(null);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/60 dark:border-gray-800/60">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-md">
            <PenTool className="text-white" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Exercise: {chapter.title}
          </h2>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Now it's time to put your knowledge into practice! Complete the exercises below to reinforce what 
            you've learned in the theory section.
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl p-6 mb-6 border border-green-200/50 dark:border-green-800/50">
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Exercise Instructions</h3>
            <ol className="space-y-3 text-gray-700 dark:text-gray-300 list-decimal list-inside">
              <li>Read the exercise requirements carefully</li>
              <li>Write your solution in the code editor below</li>
              <li>Test your solution using the "Run Code" button</li>
              <li>Submit your answer when you're ready</li>
            </ol>
          </div>

          <div className="bg-gray-900 dark:bg-black rounded-xl p-6 mb-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-gray-400">Code Editor</h4>
              <span className="text-xs text-gray-500">PL/I</span>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full bg-gray-950 rounded-lg p-4 font-mono text-sm text-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[300px]"
              placeholder="Write your PL/I code here..."
              spellCheck={false}
            />
          </div>

          {output && (
            <div className="bg-gray-900 dark:bg-black rounded-xl p-4 mb-6 border border-gray-700/50">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Output</h4>
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">{output}</pre>
            </div>
          )}

          {testResult && (
            <div className={`rounded-xl p-6 mb-6 border ${
              testResult.passed
                ? "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200/50 dark:border-green-800/50"
                : "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200/50 dark:border-red-800/50"
            }`}>
              <div className="flex items-center gap-3 mb-3">
                {testResult.passed ? (
                  <CheckCircle className="text-green-500" size={24} />
                ) : (
                  <span className="text-red-500 text-2xl">✗</span>
                )}
                <h3 className={`text-xl font-semibold ${
                  testResult.passed ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
                }`}>
                  {testResult.passed ? "Test Passed!" : "Test Failed"}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{testResult.message}</p>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Score: {testResult.score}%
              </p>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={handleRunCode}
              disabled={isRunning}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isRunning ? "Running..." : "Run Code"}
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitted}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitted ? "Submitted" : "Submit Answer"}
            </button>
            {isSubmitted && (
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
              >
                Reset
          </button>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Quiz Content Component
function QuizContent({ chapter, course }) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(null);
  
  const questions = [
    {
      id: 1,
      question: "What is the main purpose of this chapter?",
      options: [
        "To understand basic concepts",
        "To learn advanced techniques",
        "To master the fundamentals",
        "All of the above"
      ],
      correct: 3
    },
    {
      id: 2,
      question: "Which of the following is a key concept covered?",
      options: [
        "Theory and practice",
        "Practical applications",
        "Real-world examples",
        "All of the above"
      ],
      correct: 3
    },
    {
      id: 3,
      question: "What should you do after completing this quiz?",
      options: [
        "Move to the next chapter",
        "Review the theory again",
        "Practice more exercises",
        "All of the above"
      ],
      correct: 3
    }
  ];

  const handleAnswerSelect = (questionId, answerIndex) => {
    if (!isSubmitted) {
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: answerIndex
      }));
    }
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    setShowResults(true);
    
    // Calculate score
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) {
        correct++;
      }
    });
    
    const percentage = Math.round((correct / questions.length) * 100);
    setScore(percentage);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowResults(false);
    setScore(null);
  };

  const getAnswerStatus = (questionId, optionIndex) => {
    if (!showResults) return null;
    const question = questions.find(q => q.id === questionId);
    const isCorrect = optionIndex === question.correct;
    const isSelected = selectedAnswers[questionId] === optionIndex;
    
    if (isCorrect) return "correct";
    if (isSelected && !isCorrect) return "incorrect";
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200/60 dark:border-gray-800/60">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
            <CheckCircle className="text-white" size={24} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Final Quiz: {chapter.title}
          </h2>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Test your understanding of <strong>{chapter.title}</strong> by completing this quiz. 
            Select the best answer for each question.
          </p>

          {showResults && score !== null && (
            <div className={`rounded-xl p-6 mb-6 border ${
              score >= 70
                ? "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200/50 dark:border-green-800/50"
                : "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-orange-200/50 dark:border-orange-800/50"
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className={score >= 70 ? "text-green-500" : "text-orange-500"} size={32} />
                <div>
                  <h3 className={`text-2xl font-bold ${
                    score >= 70 ? "text-green-700 dark:text-green-300" : "text-orange-700 dark:text-orange-300"
                  }`}>
                    Quiz Results
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Score: {score}% ({questions.filter(q => selectedAnswers[q.id] === q.correct).length} out of {questions.length} correct)
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {score >= 70 
                  ? "Great job! You have a good understanding of this chapter."
                  : "Keep studying! Review the material and try again."}
              </p>
            </div>
          )}
          
          <div className="space-y-6">
            {questions.map((q, index) => (
              <div key={q.id} className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-6 border border-purple-200/50 dark:border-purple-800/50">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                  Question {index + 1}: {q.question}
                </h3>
                <div className="space-y-2">
                  {q.options.map((option, optIndex) => {
                    const isSelected = selectedAnswers[q.id] === optIndex;
                    const status = getAnswerStatus(q.id, optIndex);
                    
                    let buttonClass = "w-full text-left p-3 rounded-lg transition-all duration-200 ";
                    if (status === "correct") {
                      buttonClass += "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md border-2 border-green-600";
                    } else if (status === "incorrect") {
                      buttonClass += "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md border-2 border-red-600";
                    } else if (isSelected) {
                      buttonClass += "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md";
                    } else {
                      buttonClass += "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30";
                    }
                    
                    return (
                      <button
                        key={optIndex}
                        onClick={() => handleAnswerSelect(q.id, optIndex)}
                        disabled={isSubmitted}
                        className={buttonClass}
                      >
                        <span className="flex items-center gap-2">
                          {String.fromCharCode(65 + optIndex)}. {option}
                          {status === "correct" && <CheckCircle size={18} />}
                          {status === "incorrect" && <span className="text-lg">✗</span>}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            {!isSubmitted ? (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(selectedAnswers).length < questions.length}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Submit Quiz
              </button>
            ) : (
              <>
                <button
                  onClick={handleResetQuiz}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => setShowResults(!showResults)}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
                >
                  {showResults ? "Hide Results" : "Show Results"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
