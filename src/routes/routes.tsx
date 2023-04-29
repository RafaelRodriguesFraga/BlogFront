import { BrowserRouter as Router, Route, Routes as AppRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const Routes = () => {
  return (
    <Router>
      <Navbar/>
        <AppRoutes>
             <Route path="/" element={<Home />} />
             <Route path="/posts" element={<Posts />} />
        </AppRoutes>
        <Footer/>     
    </Router>
  );
};
