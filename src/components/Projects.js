import React from "react";
import "../styles/Projects.css";
import { FaProjectDiagram } from "react-icons/fa"; // ✅ Import Project Icon

const projects = [
  {
    title: "Amazon Recommender System",
    description: "Designed a recommender system based on product review data from Amazon.",
    techStack: ["HTML", "CSS", "D3", "Lucene", "LDA", "Java", "Data Visualization"],
  },
  {
    title: "Heart Rate Prediction using Electrocardiography",
    description: "Collected ECG sensor data and processed it to predict bradycardia.",
    techStack: ["MATLAB", "Python", "Machine Learning", "k-means", "RPeak Detection"],
  },
  {
    title: "Secure Banking System",
    description: "Developed a secure banking web app for safe transactions & account management.",
    techStack: ["Java", "Spring MVC", "MySQL"],
  },
  {
    title: "My Portfolio - Personal website",
    description:
      "This is my personal portfolio website showcasing my work, experience, projects, and technologies I’ve been working with. Built with React and modern CSS for responsiveness. Hosted on GitHub Pages, soon to be deployed on AWS S3 + CloudFront for scalability.",
    techStack: ["React", "HTML", "CSS", "JavaScript", "Hooks"],
  },
];

const Projects = () => {
  return (
    <section className="projects-container">
      {/* ✅ Projects Button */}
      <button className="projects-button">
        <FaProjectDiagram /> PROJECTS
      </button>

      {/* ✅ Scrollable Project List */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
