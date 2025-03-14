import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.jpg"; // ✅ Import image
import "../styles/IntroCard.css"; // ✅ Import styles

const IntroCard = () => {
  return (
    <div className="intro-card">
      <div className="inner-border">
        {/* ✅ Name at the Top */}
        <h1 className="name">Akhila Muthyala</h1>

        {/* ✅ Profile Image */}
        <div className="profile-container">
          <img src={profileImg} alt="Akhila Muthyala" className="profile-img" />
        </div>

        {/* ✅ Tagline moved below image */}
        <p className="tagline">Innovative Developer | AI Enthusiast</p>

        {/* ✅ Social Icons */}
        <div className="social-icons">
          <a href="https://github.com/amuthyal" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/akreddy07/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/akhila-muthyala-48b776209/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:muthyala.akhila07@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* ✅ Hire Me Button matches Profile Image width */}
        <a href="mailto:muthyala.akhila07@gmail.com" className="hire-me-btn">
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default IntroCard;
