import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMiniProjects from "../../hooks/useMiniProjects";

const headingStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "bold",
  fontSize: "1.25rem",
  color: "#007bff",
  marginBottom: "0.25rem"
};

const extraDetails = {
  "Simple Calculator App": {
    tech: ["HTML", "CSS", "JavaScript"],
    prerequisites: ["Basic HTML/CSS", "JavaScript fundamentals"],
    steps: [
      {
        label: "Setup Basic HTML",
        code: `<div class="calculator">
  <input type="text" class="display" disabled>
  <div class="keys">
    <button>7</button><button>8</button><button>9</button>
    <button>+</button>
    <button>4</button><button>5</button><button>6</button>
    <button>-</button>
    <button>1</button><button>2</button><button>3</button>
    <button>*</button>
    <button>0</button><button>.</button><button>=</button>
    <button>/</button>
    <button class="clear">C</button>
  </div>
</div>`
      },
      {
        label: "Add JavaScript Logic",
        code: `const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return;
  const key = e.target;
  const keyValue = key.textContent;
  const displayValue = display.value;

  if (key.classList.contains('clear')) {
    display.value = '';
  } else if (keyValue === '=') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value = displayValue === '0' ? keyValue : displayValue + keyValue;
  }
});`
      }
    ],
    whyUseful: [
      "Core Logic Practice: Master operator precedence and expression evaluation",
      "DOM Mastery: Perfect for learning element selection and manipulation",
      "Error Handling: Learn to handle edge cases like division by zero",
      "State Management: Track current input, operator, and previous value",
      "Foundation: Essential for building more complex apps like scientific calculators"
    ],
    nextSteps: [
      "Add scientific functions (square root, exponents)",
      "Implement memory functions (MC, MR, M+, M-)",
      "Add history tracking of calculations",
      "Create responsive design for mobile devices"
    ]
  },
  "Click Counter App": {
    tech: ["HTML", "CSS", "JavaScript"],
    prerequisites: ["Basic HTML/CSS", "JavaScript fundamentals", "DOM manipulation basics"],
    steps: [
      {
        label: "Setup Basic HTML",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Click Counter</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-blue-50 flex items-center justify-center min-h-screen">
  <h1 id="counter" class="text-6xl font-bold">0</h1>
  <script src="script.js"></script>
</body>
</html>`
      },
      {
        label: "Add JavaScript Logic",
        code: `const counter = document.getElementById("counter");
let count = 0;

document.body.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});`
      }
    ],
    whyUseful: [
      "Learn Event Listeners: See how to handle global clicks easily.",
      "Build Games: Starting point for clicker or idle games.",
      "Track Interactions: Add analytics to see what parts users click.",
      "Practice State: `count` is your app's state - update and display it live.",
      "Easy to Expand: Add sound, confetti, reset button, or timers!"
    ],
    nextSteps: [
      "Save counter to localStorage to persist after refresh.",
      "Animate the number growing on click.",
      "Add levels or XP rewards for milestones.",
      "Implement click velocity tracking."
    ]
  },
  "Checklist App": {
    tech: ["HTML", "CSS", "JavaScript"],
    prerequisites: ["DOM manipulation", "Basic JavaScript functions", "Event handling"],
    steps: [
      {
        label: "Setup Basic HTML",
        code: `<div class="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4">
  <h1 class="text-xl font-bold text-center">Checklist</h1>
  <input id="taskInput" type="text" placeholder="Add a task..." class="w-full border p-2 rounded" />
  <button onclick="addTask()" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Add Task</button>
  <ul id="taskList" class="space-y-2"></ul>
</div>`
      },
      {
        label: "Add JavaScript Logic",
        code: `function addTask() {
  const task = taskInput.value.trim();
  if (!task) return;
  
  const li = document.createElement("li");
  li.innerHTML = \`
    <span onclick="this.classList.toggle('line-through')">\${task}</span>
    <button onclick="this.parentElement.remove()">✖</button>
  \`;
  taskList.appendChild(li);
  taskInput.value = "";
}`
      }
    ],
    expandProject: [
      "Add localStorage to save tasks between sessions.",
      "Style completed tasks with strikethrough animation.",
      "Add a clear-all button to reset the list.",
      "Implement drag-and-drop reordering.",
      "Add due dates and priority levels."
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const { miniProjects } = useMiniProjects();

  const project = miniProjects.find((p) => String(p._id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-800 dark:text-[#e0e6f5]">
            {id ? "Project not found" : "Loading project..."}
          </p>
        </div>
      </div>
    );
  }

  const details = extraDetails[project.title] || {};

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project Details */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-32 h-32 object-cover rounded-xl shadow"/>
              )}
              <div>
                <h1
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    background: "linear-gradient(90deg, #007bff 0%, #0600a6 50%, #b4a1f4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    marginBottom: "0.5rem"
                  }}>
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      background: "#b4a1f4",
                      color: "#0600a6"
                    }}
                    className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded">
                    Mini Project
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      background: "#10b981",
                      color: "#fff"
                    }}
                    className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded">
                    Beginner
                  </span>
                </div>
                <div
                  className="mb-1 text-[#001233] dark:text-[#e0e6f5]"
                  style={{
                    fontFamily: "system-ui, 'Inter', sans-serif",
                    fontSize: "1rem"
                  }}>
                  {project.description}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  By TechLearn Solutions
                </div>
              </div>
            </div>

            {/* Duration Display */}
            <div className="mb-4">
              <h3 style={headingStyle} className="dark:text-[#bceaff]">
                Duration:
              </h3>
              <span
                className="px-3 py-1 rounded-full text-sm font-medium bg-[#bceaff] text-[#007bff] dark:bg-[#001233] dark:text-[#bceaff]"
                style={{ fontFamily: "'Poppins', sans-serif" }}>
                {project.duration}
              </span>
            </div>

            {/* Tech Stack */}
            {details.tech && (
              <div className="mb-4">
                <h3 style={headingStyle} className="dark:text-[#bceaff]">
                  Tech Stack:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {details.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-medium bg-[#bceaff] text-[#007bff] dark:bg-[#001233] dark:text-[#bceaff]"
                      style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Prerequisites */}
            {details.prerequisites && (
              <div className="mb-4">
                <h3 style={headingStyle} className="dark:text-[#bceaff]">
                  Prerequisites:
                </h3>
                <ul className="list-disc ml-6">
                  {details.prerequisites.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#001233] dark:text-[#e0e6f5]"
                      style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Steps with Embedded Code */}
            {details.steps && (
              <div className="mb-6">
                <h3 style={headingStyle} className="dark:text-[#bceaff]">
                  Steps:
                </h3>
                <ol className="list-decimal ml-6 space-y-4">
                  {details.steps.map((step, i) => (
                    <li
                      key={i}
                      className="p-3 rounded bg-[#daf0fa] text-[#001233] dark:bg-[#001233] dark:text-[#e0e6f5]"
                      style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>
                      <div className="font-semibold mb-2">{step.label}</div>
                      {step.code && (
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-1">
                          <pre className="text-xs"><code>{step.code}</code></pre>
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Project-Specific Sections */}
            {project.title === "Simple Calculator App" && (
              <>
                <div className="mb-6">
                  <h3 style={headingStyle} className="dark:text-[#bceaff]">
                    🧠 Why This is Useful
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    {details.whyUseful.map((item, i) => (
                      <li key={i} className="text-[#001233] dark:text-[#e0e6f5]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 style={headingStyle} className="dark:text-[#bceaff]">
                    🚀 Next Steps
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    {details.nextSteps.map((item, i) => (
                      <li key={i} className="text-[#001233] dark:text-[#e0e6f5]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {project.title === "Click Counter App" && (
              <>
                <div className="mb-6">
                  <h3 style={headingStyle} className="dark:text-[#bceaff]">
                    🚀 Why This is Useful
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    {details.whyUseful.map((item, i) => (
                      <li key={i} className="text-[#001233] dark:text-[#e0e6f5]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 style={headingStyle} className="dark:text-[#bceaff]">
                    ✨ Bonus: Next Steps
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    {details.nextSteps.map((item, i) => (
                      <li key={i} className="text-[#001233] dark:text-[#e0e6f5]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {project.title === "Checklist App" && (
              <div className="mb-6">
                <h3 style={headingStyle} className="dark:text-[#bceaff]">
                  🚀 Make It Yours
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  {details.expandProject.map((item, i) => (
                    <li key={i} className="text-[#001233] dark:text-[#e0e6f5]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* WhatsApp CTA */}
            <div className="flex justify-center">
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=Hi, I need help with project ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-lg shadow"
                style={{
                  background: "#10b981",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif"
                }}>
                Consult Us
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Author Details & Compiler */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Author Details Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#007bff] to-[#b4a1f4] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>TL</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-[#e0e6f5] text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>TechLearn Solutions</h3>
                <p className="text-sm text-gray-600 dark:text-[#bceaff]" style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>Full Stack Developer</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500 dark:text-[#bceaff]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-gray-700 dark:text-[#e0e6f5]" style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>support@techlearn.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500 dark:text-[#bceaff]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 dark:text-[#e0e6f5]" style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>India</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500 dark:text-[#bceaff]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1zm-2 7a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-700 dark:text-[#e0e6f5]" style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>5+ Years Experience</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-[#e0e6f5] text-center" style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>
                  Helping students build amazing projects since 2019
                </p>
              </div>
            </div>

            {/* Try in Compiler Button */}
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto mb-2 opacity-90" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                <h4 className="font-bold text-lg mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Try This Project</h4>
                <p className="text-sm opacity-90" style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>Code, compile, and run instantly</p>
              </div>
              <button
                onClick={() => {
                  window.open(`/compiler?project=${encodeURIComponent(project.title)}`, '_blank');
                }}
                className="w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}>
                🚀 Open in Compiler
              </button>
              <p className="text-xs opacity-75 mt-3" style={{ fontFamily: "system-ui, 'Inter', sans-serif" }}>
                Interactive coding environment with live preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
