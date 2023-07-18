import React, { useEffect, useState } from "react";
import * as S from "./styles";
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import PostPaginated from "../../interfaces/PostPaginated";
import { getAll } from "../../services/post.service";

type CreatePostProps = {
  title: string;
  thumbnail: string;
  content: string;
  meta: string;
  tags: any;
};

let page = 1;
let quantityPerPage = 6;

const Home = () => {
  const [posts, setPosts] = useState<PostPaginated>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const fetchPosts = async () => {
    try {
      const response = await getAll(page, quantityPerPage);
      setPosts(response.data);
      setTotalPages(response.data.totalPages);
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
      <S.NewerPostContainer>
        <S.ImageContainer>
          <S.NewerPostImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCNhaL-D3aveZLCYzmSqDqkgNb1NIj0IKyzQ&usqp=CAU"
            alt="Post Image"
          />
        </S.ImageContainer>

        <S.NewerPostContent>
          <S.NewerPostInfo>
            <S.NewerPostTag>Front-End</S.NewerPostTag>
            <S.DotBullet>&bull;</S.DotBullet>
            <S.NewerPostDate>25/03/2022</S.NewerPostDate>
          </S.NewerPostInfo>

          <S.NewerPostTitle>Como criar classes ricas com C#</S.NewerPostTitle>
          <S.NewerPostDescription>
            Pra criar classes ricas é necessario saber...
          </S.NewerPostDescription>
        </S.NewerPostContent>
      </S.NewerPostContainer>

      <S.PostContainer>
        {posts &&
          posts.data.map((post) => {
            return <PostCard key={post.id} post={post} />;
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

export default Home;
