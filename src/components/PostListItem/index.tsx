import * as S from "./styles";

const PostListItem = () => {
  return (
    <S.PostCard>
      <S.PostImage src="https://wallpapercave.com/wp/wp1940992.jpg" alt="Post Image" />

      <S.PostInfoContainer>
        <S.PostInfo>
          <S.PostTag>Front-End</S.PostTag>
          <S.Bullet>&bull;</S.Bullet>
          <S.PostDate>25/03/2022</S.PostDate>
        </S.PostInfo>

        <S.PostContent>
          <S.PostTitle>Titulo do Post</S.PostTitle>
          <S.PostDescription>Descricao do Post</S.PostDescription>
        </S.PostContent>
      </S.PostInfoContainer>
    </S.PostCard>
  );
};

export default PostListItem;
