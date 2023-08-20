import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";

export const PostCard = styled.div`
  border: 1px solid #000;
  border-radius: 5px; 

  background-image: linear-gradient(-90deg, #6a6a6a  0%, #262626 50%, #6a6a6a  100%);
  background-size: 400% 400%;

  animation: shimmer 1.5s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: -135% 0%;
    }
  }
`;

export const PostInfoContainer = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 20px;
`;

export const PostInfo = styled.div`
`;

export const PostContent = styled.div`
  margin-bottom: 20px;
`;
