import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CrowdRise from "./components/Home/Crowd_rise/CrowdRise";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <CrowdRise />
      </div>
    </div>
  );
}

export default App;
