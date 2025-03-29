import React, { useState, useRef } from "react";
import "../styles/Home.css";

import IntroCard from "./IntroCard";
import Sidebar from "./Sidebar";
import MenuToggle from "./MenuToggle";
import Description from "./Description";
import About from "./About";
import TimelineSection from "./TimelineSection"; // 🆕
import Certifications from "./Certifications";
import Projects from "./Projects";
import Contact from "./Contact";


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  // 🧠 Education & Work Combined
  const timelineData = [
    {
      year: "2021 - Present",
      items: [
        {
          title: "Full Stack Developer",
          subtitle: "PwC",
        },
      ],
    },
    {
      year: "2019 - 2021",
      items: [
        {
          title: "Full Stack Developer",
          subtitle: "CRMC",
        },
      ],
    },
    {
      year: "2017 - 2019",
      items: [
        {
          title: "Master's in Computer Science",
          subtitle: "Arizona State University",
        },
      ],
    },
    {
      year: "2013 - 2017",
      items: [
        {
          title: "Bachelor's in Computer Science",
          subtitle: "Gandhi Institute of Technology and Management",
        },
      ],
    },
  ];
  

  // 🧹 Sort by most recent (descending)
  const sortedTimeline = timelineData.sort((a, b) => b.sortYear - a.sortYear);

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
        />

        <div className="scroll-sections">
          <section id="home" className="full-section">
            <Description />
          </section>

          <section id="about" className="full-section">
            <About />
          </section>

          <section id="timeline" className="full-section">
  <TimelineSection heading="Education & Experience" data={timelineData} />
</section>


          <section id="certifications" className="full-section">
            <Certifications />
          </section>

          <section id="projects" className="full-section">
            <Projects />
          </section>

          <section id="contact" className="full-section">
  <Contact />
</section>

        </div>
      </div>
    </div>
  );
};

export default Home;
