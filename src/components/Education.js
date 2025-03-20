import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "../styles/Education.css";

const Education = () => {
  return (
    <section id="education" className="education-container">
      {/* ✅ Education Button */}
      <button className="education-button">
        <FaGraduationCap className="education-icon" /> EDUCATION
      </button>

      <h2> <span className="highlight">Education</span></h2>

      <div className="timeline">
        {/* ✅ Master's Degree */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <span className="timeline-date">2017 - 2019</span>
            <h3>Master's in Computer Science</h3>
            <p className="institution">Arizona State University</p>
          </div>
        </div>

        {/* ✅ Bachelor's Degree */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <span className="timeline-date">2013 - 2017</span>
            <h3>Bachelor's in Computer Science</h3>
            <p className="institution">Gandhi Institute of Technology and Management</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
