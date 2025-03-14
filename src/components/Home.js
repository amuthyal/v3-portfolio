import React, { useState } from "react";
import "../styles/Home.css";
import IntroCard from "./IntroCard";
import Description from "./Description";
import Sidebar from "./Sidebar";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ State for Sidebar

  return (
    <div className="home-container">
      {/* ✅ Left Side - Intro Card */}
      <div className="left-panel">
        <IntroCard />
      </div>

      {/* ✅ Right Side - Description with Sidebar */}
      <div className="right-panel">
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Description />
      </div>
    </div>
  );
};

export default Home;
