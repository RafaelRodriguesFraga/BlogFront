import React from "react";
import { Routes } from "./routes/routes";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="max-width-container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
