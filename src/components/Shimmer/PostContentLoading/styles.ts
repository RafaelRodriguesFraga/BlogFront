import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const PostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.span`
  text-align: center;
  font-size: 1.5rem;
`;

export const PostInfo = styled.div`
  width: 40%;
  margin-top: 1rem;
`;

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

export const ImageContainer = styled.div`

`;

export const PostImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const PostTextContainer = styled.div`
  margin-top: 1.5rem;
  max-width: 680px;
 
`;

export const PostText = styled.p`
  margin-top: 10px;
  font-size: 1.25rem;
  font-family: "Source Serif 4", serif;
  letter-spacing: 2px;

  @media (max-width: 420px) {
    text-align: start;
  }
`;

export const ShareContainer = styled.div`
  margin-top: 20px;
`;
