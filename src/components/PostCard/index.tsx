import { format } from "date-fns";
import Post from "../../interfaces/Post";
import * as S from "./styles";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
      <S.PostCard>
        <S.PostLink to={`/post/${post.slug}`}>
          <S.PostImage src={post.thumbnail} alt="Post Image" />

          <S.PostInfoContainer>
            <S.PostInfo>
              <S.PostTag>{post.tag}</S.PostTag>
              <S.Bullet>&bull;</S.Bullet>
              <S.PostDate>
                {format(new Date(post.createdAt), "dd/MM/yyyy")}
              </S.PostDate>
            </S.PostInfo>

            <S.PostContent>
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.PostDescription>{post.meta}</S.PostDescription>
            </S.PostContent>
          </S.PostInfoContainer>
        </S.PostLink>
      </S.PostCard>
  );
};

export default PostCard;
