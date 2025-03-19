import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/MenuToggle.css"; 

const MenuToggle = ({ menuOpen, setMenuOpen }) => {
  return (
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
      {menuOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
};

export default MenuToggle;
