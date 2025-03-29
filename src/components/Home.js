import React, { useState, useRef } from "react";
import "../styles/Home.css";
import IntroCard from "./IntroCard";
import Sidebar from "./Sidebar";
import MenuToggle from "./MenuToggle";
import Description from "./Description";
import About from "./About";
import Work from "./Work";
import Education from "./Education";
import Certifications from "./Certifications";
import Projects from "./Projects";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  return (
    <div className="home-container">
      {/* ✅ Fixed Left Panel */}
      <div className="left-panel">
        <IntroCard />
      </div>

      {/* ✅ Scrollable Right Panel with Sections */}
      <div className="right-panel-scroll-wrapper">
        <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Sidebar
          menuOpen={menuOpen}
          sidebarRef={sidebarRef}
          setMenuOpen={setMenuOpen}
        />

        <div className="scroll-sections">
          <section id="home" className="full-section">
            <Description />
          </section>

          <section id="about" className="full-section">
            <About />
          </section>

          <section id="work" className="full-section">
            <Work />
          </section>

          <section id="education" className="full-section">
            <Education />
          </section>

          <section id="certifications" className="full-section">
            <Certifications />
          </section>

          <section id="projects" className="full-section">
            <Projects />
          </section>

          <section id="contact" className="full-section">
            <div className="section-content">
              <h1>Contact</h1>
              <p>Get in touch through LinkedIn or email.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
