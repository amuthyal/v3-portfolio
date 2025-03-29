import React, { useState, useRef, useEffect } from "react";
import "../styles/Home.css";

import IntroCard from "./IntroCard";
import Sidebar from "./Sidebar";
import MenuToggle from "./MenuToggle";
import Description from "./Description";
import About from "./About";
import TimelineSection from "./TimelineSection";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sidebarRef = useRef(null);
  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    const el = sectionRefs.current[sectionId];
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // ✅ Detect Active Section on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "timeline", "certifications", "projects", "contact"];
      let currentSection = "home";

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const middle = window.innerHeight / 2;

          if (rect.top <= middle && rect.bottom >= middle) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll(); // On mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      year: "2021 - Present",
      items: [{ title: "Full Stack Developer", subtitle: "PwC" }],
    },
    {
      year: "2019 - 2021",
      items: [{ title: "Full Stack Developer", subtitle: "CRMC" }],
    },
    {
      year: "2017 - 2019",
      items: [{ title: "Master's in Computer Science", subtitle: "Arizona State University" }],
    },
    {
      year: "2013 - 2017",
      items: [{ title: "Bachelor's in Computer Science", subtitle: "Gandhi Institute of Technology and Management" }],
    },
  ];

  return (
    <div className="home-container">
      <div className="left-panel">
        <IntroCard />
      </div>

      <div className="right-panel-scroll-wrapper">
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar
  menuOpen={menuOpen}
  sidebarRef={sidebarRef}
  setMenuOpen={setMenuOpen}
  onSectionSelect={scrollToSection}
  activeSection={activeSection}
/>

        <div className="scroll-sections">
          <section id="home" className="full-section" ref={(el) => (sectionRefs.current["home"] = el)}>
            <Description />
          </section>

          <section id="about" className="full-section" ref={(el) => (sectionRefs.current["about"] = el)}>
            <About />
          </section>

          <section id="timeline" className="full-section" ref={(el) => (sectionRefs.current["timeline"] = el)}>
            <TimelineSection heading="Education & Experience" data={timelineData} />
          </section>

          <section id="certifications" className="full-section" ref={(el) => (sectionRefs.current["certifications"] = el)}>
            <Certifications />
          </section>

          <section id="projects" className="full-section" ref={(el) => (sectionRefs.current["projects"] = el)}>
            <Projects />
          </section>

          <section id="contact" className="full-section" ref={(el) => (sectionRefs.current["contact"] = el)}>
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
