import {
  BrowserRouter as Router,
  Route,
  Routes as AppRoutes,
} from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuMobile from "../components/MenuMobile";
import { useState } from "react";

export const Routes = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <Router>
      <Navbar setVisible={setMenuVisible}/>
      <MenuMobile visible={menuVisible} setVisible={setMenuVisible} />

      <AppRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </AppRoutes>
      <Footer />
    </Router>
  );
};
