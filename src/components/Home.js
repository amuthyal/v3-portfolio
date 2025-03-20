import React, { useState, useEffect, useRef } from "react";
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
  const [selectedSection, setSelectedSection] = useState("home");
  const sidebarRef = useRef(null);
  const sectionsRef = useRef({});

  // ✅ Store references for each section
  useEffect(() => {
    sectionsRef.current = {
      home: document.getElementById("home"),
      about: document.getElementById("about"),
      work: document.getElementById("work"),
      education: document.getElementById("education"),
      certifications: document.getElementById("certifications"),
      projects: document.getElementById("projects"),
      contact: document.getElementById("contact"),
    };
  }, []);

  // ✅ Smooth scrolling when selecting a section via sidebar
  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setMenuOpen(false); // ✅ Close menu when selecting a section

    const sectionElement = sectionsRef.current[section];
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Detect Scroll and Update `selectedSection`
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      Object.keys(sectionsRef.current).forEach((key) => {
        const section = sectionsRef.current[key];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = key;
          }
        }
      });

      setSelectedSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar
        menuOpen={menuOpen}
        sidebarRef={sidebarRef}
        setSelectedSection={handleSectionChange}
        setMenuOpen={setMenuOpen}
      />

      {/* ✅ Left Side - Intro Card */}
      <div className="left-panel">
        <IntroCard />
      </div>

      {/* ✅ Right Panel - Dynamically Render Only One Section */}
      <div className="right-panel">
        <section id="home" ref={(el) => (sectionsRef.current["home"] = el)}>
          {selectedSection === "home" && <Description />}
        </section>
        <section id="about" ref={(el) => (sectionsRef.current["about"] = el)}>
          {selectedSection === "about" && <About />}
        </section>
        <section id="work" ref={(el) => (sectionsRef.current["work"] = el)}>
          {selectedSection === "work" && <Work />}
        </section>
        <section id="education" ref={(el) => (sectionsRef.current["education"] = el)}>
          {selectedSection === "education" && <Education />}
        </section>
    <section id="certifications" ref={(el) => (sectionsRef.current["certifications"] = el)}>
    {selectedSection === "certifications" && <Certifications />}
    </section>
    <section id="projects" ref={(el) => (sectionsRef.current["projects"] = el)}>
    {selectedSection === "projects" && <Projects />}
    </section>
      
        <section id="contact" ref={(el) => (sectionsRef.current["contact"] = el)}>
          {selectedSection === "contact" && (
            <div className="section-content">
              <h1>Contact</h1>
              <p>Get in touch through LinkedIn or email.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
