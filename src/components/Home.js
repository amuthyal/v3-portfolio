import React, { useState, useEffect, useRef } from "react";
import "../styles/Home.css";
import IntroCard from "./IntroCard";
import Description from "./Description";
import Sidebar from "./Sidebar";
import MenuToggle from "./MenuToggle";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home"); // ✅ Track selected section
  const sidebarRef = useRef(null);

  // ✅ Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="home-container">
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} sidebarRef={sidebarRef} setSelectedSection={setSelectedSection} />
      
      {/* ✅ Left Side - Intro Card */}
      <div className="left-panel">
        <IntroCard />
      </div>

      {/* ✅ Right Side - Dynamic Description */}
      <div className="right-panel">
        <Description selectedSection={selectedSection} />
      </div>
    </div>
  );
};

export default Home;
