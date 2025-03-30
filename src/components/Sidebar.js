import React from "react";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
  FaAward,
} from "react-icons/fa";
import "../styles/Sidebar.css";

const Sidebar = ({
  menuOpen,
  sidebarRef,
  setMenuOpen,
  onSectionSelect,
}) => {
  const handleSectionClick = (section) => {
    onSectionSelect(section);
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <aside
        ref={sidebarRef}
        className={`sidebar ${menuOpen ? "expanded" : ""}`}
      >
        <h2 className={`menu-title ${menuOpen ? "visible" : ""}`}>Menu</h2>

        <nav>
          <ul>
            <li>
              <button onClick={() => handleSectionClick("home")}>
                <FaHome />
                {menuOpen && <span>Home</span>}
              </button>
            </li>

            <li>
              <button onClick={() => handleSectionClick("about")}>
                <FaUser />
                {menuOpen && <span>About</span>}
              </button>
            </li>

            <li>
              <button onClick={() => handleSectionClick("timeline")}>
                <FaGraduationCap />
                {menuOpen && <span>Education & Experience</span>}
              </button>
            </li>

            <li>
              <button onClick={() => handleSectionClick("certifications")}>
                <FaAward />
                {menuOpen && <span>Certifications</span>}
              </button>
            </li>

            <li>
              <button onClick={() => handleSectionClick("projects")}>
                <FaProjectDiagram />
                {menuOpen && <span>Projects</span>}
              </button>
            </li>

            <li>
              <button onClick={() => handleSectionClick("contact")}>
                <FaEnvelope />
                {menuOpen && <span>Contact</span>}
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;