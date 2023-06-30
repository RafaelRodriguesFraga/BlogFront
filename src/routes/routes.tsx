import { BrowserRouter as Router, Route, Routes as AppRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const Routes = () => {
  return (
    <Router>
      <Navbar/>
        <AppRoutes>
             <Route path="/" element={<Home />} />
             <Route path="/post" element={<Post />} />
        </AppRoutes>
        <Footer/>     
    </Router>
  );
};
