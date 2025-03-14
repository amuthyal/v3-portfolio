import React from "react";
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaCertificate, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = ({ menuOpen, setMenuOpen }) => { // ✅ Receive props from Home.js
  return (
    <aside className={`sidebar ${menuOpen ? "expanded" : ""}`}>
      {/* ✅ Hamburger Menu */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* ✅ Sidebar Navigation */}
      <nav>
        <ul>
          <li>
            <a href="#home">
              <FaHome /> {menuOpen && <span>Home</span>}
            </a>
          </li>
          <li>
            <a href="#about">
              <FaUser /> {menuOpen && <span>About</span>}
            </a>
          </li>
          <li>
            <a href="#work">
              <FaBriefcase /> {menuOpen && <span>Work</span>}
            </a>
          </li>
          <li>
            <a href="#education">
              <FaGraduationCap /> {menuOpen && <span>Education</span>}
            </a>
          </li>
          <li>
            <a href="#certifications">
              <FaCertificate /> {menuOpen && <span>Certifications</span>}
            </a>
          </li>
          <li>
            <a href="#projects">
              <FaProjectDiagram /> {menuOpen && <span>Projects</span>}
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope /> {menuOpen && <span>Contact</span>}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
