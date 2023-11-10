import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.div`

`;

export const RelatedPostsTitle = styled.h2``;

export const RelatedPosts = styled.div`
  display: grid;
 gap: 20px;

 margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
`;

export const PostLink = styled(Link)``;
