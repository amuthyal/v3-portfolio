import React from "react";
import { 
  FaHome, FaUser, FaBriefcase, FaGraduationCap, 
  FaCertificate, FaProjectDiagram, FaEnvelope
} from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = ({ menuOpen, sidebarRef, setSelectedSection, setMenuOpen }) => {
  
  // ✅ Handles section change and auto-closes menu
  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setMenuOpen(false); // ✅ Auto-close sidebar
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}></div>

      <aside ref={sidebarRef} className={`sidebar ${menuOpen ? "expanded" : ""}`}>
        <h2 className={`menu-title ${menuOpen ? "visible" : ""}`}>Menu</h2>

        <nav>
          <ul>
            <li><a onClick={() => handleSectionClick("home")}><FaHome /> {menuOpen && <span>Home</span>}</a></li>
            <li><a onClick={() => handleSectionClick("about")}><FaUser /> {menuOpen && <span>About</span>}</a></li>
            <li><a onClick={() => handleSectionClick("work")}><FaBriefcase /> {menuOpen && <span>Work</span>}</a></li>
            <li><a onClick={() => handleSectionClick("education")}><FaGraduationCap /> {menuOpen && <span>Education</span>}</a></li>
            <li><a onClick={() => handleSectionClick("certifications")}><FaCertificate /> {menuOpen && <span>Certifications</span>}</a></li>
            <li><a onClick={() => handleSectionClick("projects")}><FaProjectDiagram /> {menuOpen && <span>Projects</span>}</a></li>
            <li><a onClick={() => handleSectionClick("contact")}><FaEnvelope /> {menuOpen && <span>Contact</span>}</a></li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
