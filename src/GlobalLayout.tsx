import { useState } from "react";
import Post from "./interfaces/Post";
import { searchByTitleAsync } from "./services/post.service";
import Navbar from "./components/Navbar";
import MenuMobile from "./components/MenuMobile";
import SearchForm from "./components/SearchForm";
import { Routes } from "./routes/routes";
import "./GlobalLayout.css";

import {
  BrowserRouter as Router,
  Route,
  Routes as AppRoutes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import PostContent from "./pages/PostContent";
import Footer from "./components/Footer";
import FilteredPost from "./pages/FilteredPost";
import SearchResult from "./pages/SearchResult";
import { useSearchTerm } from "./contexts/SearchTermContext";

const GlobalLayout = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const { searchTerm } = useSearchTerm();

  const handleSearch = async () => {
    if (searchTerm) {
      var response = await searchByTitleAsync(searchTerm);
      setSearchResults(response.data.data);

      navigate(`/posts/search?title=${searchTerm}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1>Logo</h1>
          </Link>
        </div>

        <Navbar setVisible={setMenuVisible} />
        <MenuMobile visible={menuVisible} setVisible={setMenuVisible} />

        <SearchForm onSearch={handleSearch} />
      </div>

      <div>
        <AppRoutes>
          <Route path="/" element={<Home searchResults={searchResults} />} />
          <Route path="/post/:slug" element={<PostContent />} />
          <Route path="/posts/:tag" element={<FilteredPost />} />
          <Route
            path="/posts/search"
            element={<SearchResult posts={searchResults} />}
          />
        </AppRoutes>
        <Footer />
      </div>
    </>
  );
};

export default GlobalLayout;
