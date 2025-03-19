import React, { useState, useEffect } from "react";
import { 
  FaHome, FaUser, FaBriefcase, FaGraduationCap, 
  FaCertificate, FaProjectDiagram, FaEnvelope
} from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = ({ menuOpen, sidebarRef, setSelectedSection }) => {
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Function to update selected section
  const handleSectionClick = (section) => {
    setActiveSection(section);
    setSelectedSection(section); // Update the state in Home.js
  };

  return (
    <>
      <div className={`overlay ${menuOpen ? "active" : ""}`}></div>

      <aside ref={sidebarRef} className={`sidebar ${menuOpen ? "expanded" : ""}`}>
        <h2 className={`menu-title ${menuOpen ? "visible" : ""}`}>Menu</h2>

        <nav>
          <ul>
            <li>
              <a onClick={() => handleSectionClick("home")} className={activeSection === "home" ? "active" : ""}>
                <FaHome /> {menuOpen && <span>Home</span>}
              </a>
            </li>
            <li>
              <a onClick={() => handleSectionClick("about")} className={activeSection === "about" ? "active" : ""}>
                <FaUser /> {menuOpen && <span>About</span>}
              </a>
            </li>
            <li>
              <a onClick={() => handleSectionClick("work")} className={activeSection === "work" ? "active" : ""}>
                <FaBriefcase /> {menuOpen && <span>Work</span>}
              </a>
            </li>
            <li>
              <a onClick={() => handleSectionClick("education")} className={activeSection === "education" ? "active" : ""}>
                <FaGraduationCap /> {menuOpen && <span>Education</span>}
              </a>
            </li>
            <li>
              <a onClick={() => handleSectionClick("certifications")} className={activeSection === "certifications" ? "active" : ""}>
                <FaCertificate /> {menuOpen && <span>Certifications</span>}
              </a>
            </li>
            <li>
              <a onClick={() => handleSectionClick("projects")} className={activeSection === "projects" ? "active" : ""}>
                <FaProjectDiagram /> {menuOpen && <span>Projects</span>}
              </a>
            </li>
            <li>
              <a onClick={() => handleSectionClick("contact")} className={activeSection === "contact" ? "active" : ""}>
                <FaEnvelope /> {menuOpen && <span>Contact</span>}
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
