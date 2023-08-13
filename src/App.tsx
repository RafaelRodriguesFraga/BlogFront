import React from "react";
import { Routes } from "./routes/routes";
import "./App.css";
import Navbar from "./components/Navbar";
import GlobalLayout from "./GlobalLayout";
import {
  BrowserRouter as Router,
  Route,
  Routes as AppRoutes,
  Link,
  useNavigate,
} from "react-router-dom";
import { SearchTermProvider } from "./contexts/SearchTermContext";

function App() {
  return (
    <div className="App">
      <div className="max-width-container">
        <Router>
          <SearchTermProvider>
            <GlobalLayout />
          </SearchTermProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
