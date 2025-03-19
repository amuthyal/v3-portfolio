import React from "react";
import { FaHome } from "react-icons/fa";
import "../styles/Description.css";
import About from "./About"; // ✅ Import About component

const Description = ({ selectedSection }) => {
  return (
    <div className="description">
      {selectedSection === "home" && (
        <>
          <button className="intro-button"><FaHome /> INTRODUCE</button>
          <h1>Say Hi from <span className="highlight">Akhila</span>,</h1>
          <h2>Full-Stack Developer and AI Enthusiast</h2>
          <p>
            I design and build high-performance applications with a strong focus on AI-driven
            efficiency and scalability. Passionate about elegant code and seamless user experiences.
          </p>
        </>
      )}

      {selectedSection === "about" && <About />} {/* ✅ Display About when selected */}

      {selectedSection === "work" && (
        <>
          <h1>Work Experience</h1>
          <p>Details about work experience will be here.</p>
        </>
      )}

      {selectedSection === "education" && (
        <>
          <h1>Education</h1>
          <p>Details about education will be here.</p>
        </>
      )}

      {selectedSection === "certifications" && (
        <>
          <h1>Certifications</h1>
          <p>Details about certifications will be here.</p>
        </>
      )}

      {selectedSection === "projects" && (
        <>
          <h1>Projects</h1>
          <p>Details about projects will be here.</p>
        </>
      )}

      {selectedSection === "contact" && (
        <>
          <h1>Contact</h1>
          <p>Get in touch through LinkedIn or email.</p>
        </>
      )}
    </div>
  );
};

export default Description;
