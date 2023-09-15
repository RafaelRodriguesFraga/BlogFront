import { useEffect, useState } from "react";
import * as S from "./styles";
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import { getAll } from "../../services/post.service";
import Post from "../../interfaces/Post";
import { useLocation } from "react-router-dom";
import SearchResult from "../SearchResult";
import PostCardLoading from "../../components/Shimmer/PostCardLoading";

let quantityPerPage = 9;

type HomeProps = {
  searchResults: Post[];
};
const Home = ({ searchResults }: HomeProps) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");

  const [posts, setPosts] = useState<Post[]>(Array(6).fill({}));
  const [featuredPost, setFeaturedPost] = useState<Post>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const fetchPosts = async (page: number) => {
    try {
      setIsLoading(true);
      const response = await getAll(page, quantityPerPage);

      const { totalPages } = response.data;
      const { data } = response.data;

      setPosts(data);
      setTotalPages(totalPages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, []);
  
  const fetchMorePosts = (page: number) => {
     fetchPosts(page);
  };

  return (
    <S.Container>
      <S.PostContainer>
        {title ? (
          <SearchResult posts={searchResults} />
        ) : (
        posts.map((post) => {
            return isLoading ? <PostCardLoading key={post.id} /> : <PostCard key={post.id} post={post} />;
          })
        )}
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
