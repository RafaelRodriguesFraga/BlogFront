import styled from "styled-components";

export const Container = styled.div`
  margin-left: 16px;
  margin-top: 16px;
`;

export const NewerPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 975px) {
    display: flex;
    flex-direction: column;
  }
`;

export const NewerPostImage = styled.img`
  widht: 710px;
  height: 389px;
  object-fit: cover;

  @media (max-width: 975px) {
    widith: auto;
    height: auto;
  }
`;

export const NewerPostContent = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
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
