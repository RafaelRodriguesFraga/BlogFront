import React, { useEffect, useState } from "react";
import * as S from "./styles";
import "./styles.css";
import { getBySlug } from "../../services/post.service";
import { useLocation, useParams } from "react-router-dom";
import Post from "../../interfaces/Post";
import SocialShareButton from "../../components/SocialShareButton";

const PostContent = () => {
  const { slug } = useParams();
  const shareUrl = window.location.href;

  const [post, setPost] = useState<Post>({} as Post);

  const getPost = async () => {
    var response = await getBySlug(slug as string);
    var { data } = response.data;
    setPost(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <S.Container>
      <S.PostContent>
        <S.Title>{post.title}</S.Title>
        <S.PostInfo>
          <S.PostTag> {post.tag}</S.PostTag>
          <S.Bullet>&bull;</S.Bullet>
          <S.PostDate>{post.createdAt}</S.PostDate>
        </S.PostInfo>

        <S.ImageContainer>
          <S.PostImage src={post.thumbnail} />
        </S.ImageContainer>

        <S.PostTextContainer>
          <S.PostText dangerouslySetInnerHTML={{ __html: post.content }} />

          <S.ShareContainer>
            <h2>Compartilhe esse post</h2>
            <SocialShareButton url={shareUrl} title={post.title} thumbnail={post.thumbnail} />
          </S.ShareContainer>
        </S.PostTextContainer>
      </S.PostContent>
    </S.Container>
  );
};

export default PostContent;
