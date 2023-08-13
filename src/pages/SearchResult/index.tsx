import { useLocation } from "react-router-dom";
import Post from "../../interfaces/Post";
import * as S from "./styles";

import React from "react";
import PostCard from "../../components/PostCard";
import { useSearchTerm } from "../../contexts/SearchTermContext";

interface SearchResultProps {
  posts: Post[];
}

const SearchResult = ({ posts }: SearchResultProps) => {
    const {searchTerm} = useSearchTerm();
  return (
    
    <S.Container>
      <S.ResultContainer>
        <S.ResultText>Você pesquisou por: {searchTerm}</S.ResultText>
        <S.ResultText>{posts.length} resultados encontrados</S.ResultText>
      </S.ResultContainer>

      <S.PostContainer>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </S.PostContainer>
    </S.Container>
  );
};

export default SearchResult;
