import React, { useEffect, useState } from "react";
import * as S from "./styles";
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import PostPaginated from "../../interfaces/PostPaginated";
import { getAll } from "../../services/post.service";
import { format } from "date-fns";
import Post from "../../interfaces/Post";
import { useLocation, useNavigate } from "react-router-dom";
import SearchResult from "../SearchResult";

let page = 1;
let quantityPerPage = 10;

type HomeProps = {
  searchResults: Post[];
};
const Home = ({ searchResults }: HomeProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  console.log(title);
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredPost, setFeaturedPost] = useState<Post>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const fetchPosts = async () => {
    try {
      const response = await getAll(page, quantityPerPage);

      const { totalPages } = response.data;
      const { data } = response.data;

      setFeaturedPost(data[0]);
      setPosts(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchMorePosts = (index: number) => {
    page = index;
    fetchPosts();
  };

  return (
    <S.Container>
      <S.PostContainer>
        {title ? (
          <SearchResult posts={searchResults} />
        ) : (
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })
        )}
        {/* {posts &&
          posts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })} */}
      </S.PostContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        fetchMorePosts={fetchMorePosts}
      />
    </S.Container>
  );
};

export default Home;
