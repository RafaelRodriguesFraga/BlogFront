import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5rem;
`;

export const NewerPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;  
  
  @media (max-width: 975px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  max-width: 540px;
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

export const AuthorAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuhtorName = styled.span`
  font-size: 1.2rem;
`;

export const AuthorProfession = styled.span`
  font-size: 1.2rem;
  color: #999;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  margin-top: 3.75rem;
  gap: 2rem;
`;
