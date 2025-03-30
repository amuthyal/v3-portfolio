import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Timeline.css";

const TimelineSection = ({ data }) => {
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
    <section id="timeline" className="timeline-container full-section">
      <div className="timeline-inner">
        <button className="resume-button">📄 RESUME</button>

        <h2>
          Education & <span className="highlight">Experience</span>
        </h2>

        <div className="timeline-wrapper">
          <div className="timeline-line-absolute" />
          <div className="timeline">
            {data.map((entry, index) => (
              <motion.div
                className="timeline-item scroll-animation"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`timeline-dot ${
                    index === 0 ? "dot-highlight" : "dot-default"
                  }`}
                />
                <div className="timeline-content">
                  <span className={`timeline-date ${index === 0 ? "highlight" : "dimmed"}`}>
                    {entry.year}
                  </span>
                  {entry.items.map((item, i) => (
                    <div key={i}>
                      <h3>{item.title}</h3>
                      <p className="institution">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
