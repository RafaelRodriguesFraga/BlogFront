import React, { useEffect, useState } from "react";
import * as S from "./styles";
import PostListItem from "../../components/PostListItem";
import Pagination from "../../components/Pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

    const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
    
  return (
    <S.Container>
      <S.NewerPostContainer>
        <S.ImageContainer>
          <S.NewerPostImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3iPk7K4pohAy6fc9b4XPjtlAiXSndPJ0liA&usqp=CAU"
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
          <S.AuthorContainer>
            <S.AuthorAvatar
              src="https://static.vecteezy.com/system/resources/previews/002/002/403/original/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="Author Avatar"
            />

            <S.AuthorContent>
              <S.AuhtorName>John Doe</S.AuhtorName>
              <S.AuthorProfession>Software Developer</S.AuthorProfession>
            </S.AuthorContent>
          </S.AuthorContainer>
        </S.NewerPostContent>
      </S.NewerPostContainer>

      <S.PostContainer>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </S.PostContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </S.Container>
  );
};

export default Home;
