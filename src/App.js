import React from "react";
import Home from "./components/Home";
import "./App.css"; // Import global styles

const App = () => {
  return (
    <>
      {/* Animated Background */}
      <div className="animated-background"></div>

      {/* Main Content */}
      <Home />
    </>
  );
};

export default App;
