import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const PostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.span`
  text-align: center;
  font-size: 1.5rem;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  width: 100%;
  margin-top: 2.5rem;
  justify-content: center;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 100%;
  object-fit: cover;
  max-width: 768px;
`;

export const PostTextContainer = styled.div`
  margin-top: 1.5rem;
  
`;

export const PostText = styled.p`
  max-width: 768px;
  font-size: 1.25rem;
  font-family: "Source Serif 4", serif;
  text-align: justify;

  @media (max-width: 420px){
    text-align: start;

  }
`;
