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


export const NewerPostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  border: 1px solid;
  background-color: #27374d;
  border-radius: 10px;
  gap: 2rem;

  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media (max-width: 636px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-top: 2rem;
    gap: 0;
  }

  @media (max-width: 345px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-top: 2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const NewerPostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;

  @media (max-width: 680px) {
    border-top-right-radius: 10px;
  }
`;

export const NewerPostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

export const NewerPostInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const NewerPostTag = styled.span`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 0.5rem;
  opacity: 0.6;
`;

export const DotBullet = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  color: #fff;
  opacity: 0.6;
`;

export const NewerPostDate = styled.span`
  font-size: 1.2rem;
  color: #fff;
  opacity: 0.6;
  margin-top: 0.5rem;
`;

export const NewerPostTitle = styled.h2`
  font-size: 2rem;

  @media (max-width: 420px) {
    font-size: 1.75rem;
  }
`;

export const NewerPostDescription = styled.p`
  font-size: 1.2rem;
  color: #999;
`;
