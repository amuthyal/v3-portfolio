import React from "react";
import "../styles/Projects.css";
import {
  FaProjectDiagram,
  FaHeartbeat,
  FaShieldAlt,
  FaGlobe,
  FaFolderOpen,
} from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Project",
    description:
      "A fully responsive, modern portfolio website built with React.js, showcasing experience, projects, skills, certifications, and contact info — with smooth scroll-based transitions and a mobile-first design.",
    github: "https://github.com/amuthyal/my-portfolio",
    techStack: ["React.js", "Framer Motion", "HTML/CSS", "React Icons", "AWS S3", "JavaScript (ES6)"],
    icon: <FaProjectDiagram />,
  },
  {
    title: "Smart Note App",
    description:
      "A clean, AI-powered note-taking web app built with React, Firebase, and OpenAI GPT-3.5. Create, edit, summarize, and search notes with a simple, modern interface.",
    github: "https://github.com/amuthyal/smart-note-gpt",
    techStack: ["React", "TypeScript", "Firebase", "OpenAI GPT-3.5", "CSS", "Vite"],
    icon: <FaProjectDiagram />,
  },
  {
    title: "🏎️ F1 Analytics Predictor",
    description:
      "An interactive web app to predict Formula 1 podium finishes and visualize driver & team performance using real-time and historical data.",
    github: "https://github.com/amuthyal/f1-analytics-predictor",
    techStack: ["React", "Axios", "FastF1 API", "LightGBM", "Flask", "Python"],
    icon: <FaProjectDiagram />,
  },
  {
    title: "Amazon Recommender System",
    description:
      "Designed a recommender system based on product review data from Amazon.",
    techStack: ["HTML", "CSS", "D3", "Lucene", "LDA", "Java", "Data Visualization"],
    icon: <FaGlobe />,
  },
  {
    title: "Heart Rate Prediction using Electrocardiography",
    description:
      "Collected ECG sensor data and processed it to predict bradycardia.",
    techStack: ["MATLAB", "Python", "Machine Learning", "k-means", "RPeak Detection"],
    icon: <FaHeartbeat />,
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <button className="projects-title-button">
        <FaFolderOpen className="projects-button-icon" />
        PROJECTS
      </button>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-left">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
            {/* ✅ Clickable Icon for GitHub */}
            {project.github && (
              <a
                className="card-icon"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link"
              >
                {project.icon}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
