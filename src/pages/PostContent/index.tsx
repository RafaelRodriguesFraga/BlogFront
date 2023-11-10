import { useEffect, useState } from "react";
import * as S from "./styles";
import "./styles.css";
import { getBySlug, getRelatedPostsAsync } from "../../services/post.service";
import { Link, useParams } from "react-router-dom";
import Post from "../../interfaces/Post";
import SocialShareButton from "../../components/SocialShareButton";
import PostContentLoading from "../../components/Shimmer/PostContentLoading";
import PostCard from "../../components/PostCard";
import RelatedPost from "../../components/RelatedPosts";

const PostContent = () => {
  const { slug } = useParams();
  const shareUrl = window.location.href;

  const [post, setPost] = useState<Post>({} as Post);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = async () => {
    setIsLoading(true);
    var response = await getBySlug(slug as string);
    var { data } = response.data;
    console.log(data.createdAt);
    setPost(data);
    setIsLoading(false);
  };

  const getRelatedPosts = async () => {
    setIsLoading(true);
    var response = await getRelatedPostsAsync(slug as string);
    var { data } = response.data;
    console.log(data);
    setRelatedPosts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    getRelatedPosts();
  }, [slug]);

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

            <S.RelatedPosts>
              {relatedPosts.map((post) => (
                <RelatedPost post={post} />
              ))}
            </S.RelatedPosts>
          </S.PostTextContainer>
        </S.PostContent>
      )}
    </S.Container>
  );
};

export default PostContent;
