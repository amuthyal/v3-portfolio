import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2>About Me</h2>
      <p>
        With over five years of experience in software engineering, I specialize in full-stack development with
        modern technologies such as <strong>React, Angular, GraphQL, and Node.js.</strong>
      </p>
      <p>
        I optimize system architecture and integrate AI/ML solutions to enhance software capabilities.
      </p>
      <div className="tech-stack">
        <h3>Technologies I’ve Been Working With Recently:</h3>
        <div className="tech-list">
          <span>JavaScript (ES6+)</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Angular</span>
          <span>Node.js</span>
          <span>AWS</span>
        </div>
      </div>
    </section>
  );
};

export default About;
