import Post from "../../interfaces/Post";
import PostCard from "../PostCard";
import * as S from "./styles";

type RelatedPostsProps = {
  post: Post;
};

const RelatedPost = ({ post }: RelatedPostsProps) => {
  return (
    <S.Container>
      <S.RelatedPostsTitle>Você também pode gostar </S.RelatedPostsTitle>

      <S.RelatedPosts>
        <PostCard post={post} />     
      </S.RelatedPosts>
    </S.Container>
  );
};

export default RelatedPost;
