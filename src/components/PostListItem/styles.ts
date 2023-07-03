import styled from "styled-components";

export const PostCard = styled.div`
  border: 1px solid;
  background-color: #27374d;
  border-radius: 5px;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PostImage = styled.img`
  width: 100%;

`;

export const PostInfoContainer = styled.div`
  margin-left: 1rem;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const PostContent = styled.div``;

export const PostTag = styled.span`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 0.5rem;
  opacity: 0.6;
`;

export const Bullet = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: #fff;
  opacity: 0.6;
`;

export const PostDate = styled.span`
  font-size: 1.2rem;
  color: #fff;
  opacity: 0.6;
  margin-top: 0.5rem;
`;

export const PostTitle = styled.h2`
  color: #fff;
  margin-top: 11px;
`;

export const PostDescription = styled.p`
  font-size: 1rem;
  color: #fff;
  margin-top: 10px;
  margin-bottom: 1rem;
  opacity: 0.6;
`;
