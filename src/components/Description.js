import React from "react";
import { FaHome } from "react-icons/fa";
import "../styles/Description.css";

const Description = () => {
  return (
    <div className="description">
      <button className="intro-button"><FaHome /> INTRODUCE</button>
      <h1>Say Hi from <span className="highlight">Akhila</span>,</h1>
      <h2>Full-Stack Developer and AI Enthusiast</h2>
      <p>
        I design and build high-performance applications with a strong focus on AI-driven
        efficiency and scalability. Passionate about elegant code and seamless user experiences.
      </p>
    </div>
  );
};

export default Description;
