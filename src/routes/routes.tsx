import {
  BrowserRouter as Router,
  Route,
  Routes as AppRoutes,
} from "react-router-dom";
import Home from "../pages/Home";
import PostContent from "../pages/PostContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuMobile from "../components/MenuMobile";
import { useState } from "react";
import FilteredPost from "../pages/FilteredPost";

export const Routes = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <Router>
      <Navbar setVisible={setMenuVisible}/>
      <MenuMobile visible={menuVisible} setVisible={setMenuVisible} />

      <AppRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<PostContent />} />
        <Route path="/posts/:tag" element={<FilteredPost />} />
      </AppRoutes>
      <Footer />
    </Router>
  );
};
