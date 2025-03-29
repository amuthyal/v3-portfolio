import React from "react";
import "../styles/Projects.css";
import { FaProjectDiagram, FaHeartbeat, FaShieldAlt, FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "Amazon Recommender System",
    description: "Designed a recommender system based on product review data from Amazon.",
    techStack: ["HTML", "CSS", "D3", "Lucene", "LDA", "Java", "Data Visualization"],
    icon: <FaGlobe />,
  },
  {
    title: "Heart Rate Prediction using Electrocardiography",
    description: "Collected ECG sensor data and processed it to predict bradycardia.",
    techStack: ["MATLAB", "Python", "Machine Learning", "k-means", "RPeak Detection"],
    icon: <FaHeartbeat />,
  },
  {
    title: "Secure Banking System",
    description: "Developed a secure banking web app for safe transactions & account management.",
    techStack: ["Java", "Spring MVC", "MySQL"],
    icon: <FaShieldAlt />,
  },
  {
    title: "My Portfolio - Personal website",
    description:
      "This is my personal portfolio showcasing work, experience, and tech stack. Built with React and modern CSS. Hosted on GitHub Pages, soon on AWS S3 + CloudFront.",
    techStack: ["React", "HTML", "CSS", "JavaScript", "Hooks"],
    icon: <FaProjectDiagram />,
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <button className="projects-title-button">PROJECTS</button>

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
            <div className="card-icon">{project.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
