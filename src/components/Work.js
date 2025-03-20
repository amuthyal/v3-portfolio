import React, { useEffect } from "react";
import { FaBriefcase } from "react-icons/fa"; // ✅ Import Work Icon
import "../styles/Work.css";

const Work = () => {
  
  // ✅ Scroll Animation Effect
  useEffect(() => {
    const items = document.querySelectorAll(".scroll-animation");
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    });

    items.forEach(item => observer.observe(item));

    return () => items.forEach(item => observer.unobserve(item));
  }, []);

  return (
    <section id="work" className="work-container">
      {/* ✅ Work Button with Icon */}
      <button className="work-button">
        <FaBriefcase className="work-icon" /> WORK EXPERIENCE
      </button>

      <h2>Work <span className="highlight">Experience</span></h2>

      <div className="timeline">
        {/* ✅ Current Experience */}
        <div className="timeline-item">
          <div className="timeline-left item scroll-animation">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div> {/* ✅ Vertical Line */}
          </div>
          <div className="timeline-content">
            <span className="timeline-date">2021 - Present</span>
            <h3>Full Stack Developer</h3>
            <p className="company">PwC</p>
          </div>
        </div>

        {/* ✅ Previous Experience */}
        <div className="timeline-item">
          <div className="timeline-left item scroll-animation">
            <div className="timeline-dot"></div>
            <div className="timeline-line"></div> {/* ✅ Vertical Line */}
          </div>
          <div className="timeline-content">
            <span className="timeline-date">2019 - 2021</span>
            <h3>Full Stack Developer</h3>
            <p className="company">CRMC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
