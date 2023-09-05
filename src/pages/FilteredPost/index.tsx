import React, { useEffect, useState } from "react";
import * as S from "./styles";
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import PostPaginated from "../../interfaces/PostPaginated";
import { getAll, getAllByTag } from "../../services/post.service";
import { format } from "date-fns";
import Post from "../../interfaces/Post";
import { useParams } from "react-router-dom";
import PostCardLoading from "../../components/Shimmer/PostCardLoading";

let page = 1;
let quantityPerPage = 10;

const FilteredPost = () => {
  const {tag} = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      const response = await getAllByTag(page, quantityPerPage, tag as string);

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
    fetchPosts();
  }, [tag]);

  const fetchMorePosts = (index: number) => {
    page = index;
    fetchPosts();
  };

  return (
    <S.Container>
      <S.PostContainer>
        {posts &&
          posts.map((post) => {
            return isLoading ? <PostCardLoading key={post.id} /> : <PostCard key={post.id} post={post} />;
          })}
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

export default FilteredPost;
