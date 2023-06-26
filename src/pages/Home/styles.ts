import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
`;

export const NewerPostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 300px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    gap: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #fff; 
`;

export const NewerPostImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const NewerPostContent = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const NewerPostDescription = styled.p`
  font-size: 1.2rem;
  color: #999;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(278px, 1fr));
  margin-top: 3.75rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 300px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 2rem;
  }
`;
