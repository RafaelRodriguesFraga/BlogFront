import React, { useEffect, useState } from "react";
import * as S from "./styles";
import "./styles.css"
import { getBySlug } from "../../services/post.service";
import { useParams } from "react-router-dom";
import Post from "../../interfaces/Post";

const PostContent = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post>({} as Post);


  const getPost = async () => {
    var response = await getBySlug(slug ? slug : "");
    var { data } = response.data;
    console.log(data);
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
          <S.PostTag> {post.tags && post.tags.join(", ")}</S.PostTag>
          <S.Bullet>&bull;</S.Bullet>
          <S.PostDate>{post.createdAt}</S.PostDate>
        </S.PostInfo>

        <S.ImageContainer>
          <S.PostImage src={post.thumbnail} />
        </S.ImageContainer>

        <S.PostTextContainer>
          <S.PostText dangerouslySetInnerHTML={{__html: post.content}}>
           
          </S.PostText>
        </S.PostTextContainer>
          
        
      </S.PostContent>
    </S.Container>
  );
};

export default PostContent;
