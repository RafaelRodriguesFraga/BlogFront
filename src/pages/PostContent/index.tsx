import { useEffect, useState } from "react";
import * as S from "./styles";
import "./styles.css";
import { getBySlug } from "../../services/post.service";
import { useParams } from "react-router-dom";
import Post from "../../interfaces/Post";
import SocialShareButton from "../../components/SocialShareButton";
import PostContentLoading from "../../components/Shimmer/PostContentLoading";
import { format } from "date-fns";

const PostContent = () => {
  const { slug } = useParams();
  const shareUrl = window.location.href;

  const [post, setPost] = useState<Post>({} as Post);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = async () => {
    setIsLoading(true);
    var response = await getBySlug(slug as string);
    var { data } = response.data;
    console.log(data.createdAt);
    setPost(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <S.Container>
      {isLoading ? (
        <PostContentLoading />
      ) : (
        <S.PostContent>
          <S.Title>{post.title}</S.Title>
          <S.PostInfo>
            <S.PostTag> {post.tag}</S.PostTag>
            <S.Bullet>&bull;</S.Bullet>
            <S.PostDate>   
              {new Date(post.createdAt).toLocaleDateString()}      
              {/* {format(new Date(post.createdAt), "dd/MM/yyyy")} */}
            </S.PostDate>
          </S.PostInfo>

          <S.ImageContainer>
            <S.PostImage src={post.thumbnail} />
          </S.ImageContainer>

          <S.PostTextContainer>
            <S.PostText dangerouslySetInnerHTML={{ __html: post.content }} />

            <S.ShareContainer>
              <h2>Compartilhe esse post</h2>
              <SocialShareButton
                url={shareUrl}
                title={post.title}
                thumbnail={post.thumbnail}
              />
            </S.ShareContainer>
          </S.PostTextContainer>
        </S.PostContent>
      )}
    </S.Container>
  );
};

export default PostContent;
