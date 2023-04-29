import * as S from "./styles";

const PostListItem = () => {
  return (
    <S.PostCard>
      <S.PostImage src="https://via.placeholder.com/340x213" alt="Post Image" />
      <S.PostInfo>
        <S.PostTag>Front-End</S.PostTag>
        <S.Bullet>&bull;</S.Bullet>
        <S.PostDate>25/03/2022</S.PostDate>
      </S.PostInfo>
      <S.PostTitle>Titulo do Post</S.PostTitle>
      <S.PostDescription>Descricao do Post</S.PostDescription>
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
    </S.PostCard>
  );
};

export default PostListItem;
