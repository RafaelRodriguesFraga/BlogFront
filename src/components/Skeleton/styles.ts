import styled, { css, keyframes } from "styled-components";
import { SkeletonProps } from ".";


export const ImageStyle = css<SkeletonProps>`
  width: ${props => props.width};
  aspect-ratio: 16/9;
  margin-top: ${props => props.marginTop};

`;

export const InfoStyle = css<SkeletonProps>`
  width: ${props => props.width};
  height: 10px;
  border: 1px solid;
  margin-top: 0.625rem;
  border-radius: 50px;
`;

export const TitleStyle = css`
  width: 70%;
  height: 10px;
  border: 1px solid;
  margin-top: 0.625rem;
  border-radius: 50px;
`;

export const MetaStyle = css`
  width: 70%;
  height: 10px;
  border: 1px solid;
  margin-top: 0.625rem;
  border-radius: 50px;
`;

export const Content = css<SkeletonProps>`
  width: ${props => props.width};
  height: 10px;
  margin-top: ${props => props.marginTop};
`


const getSkeletonStyle = (type: string) => {
  switch (type) {
    case "image":
      return ImageStyle;
    case "info":
      return InfoStyle;
    case "title":
      return TitleStyle;
    case "meta":
      return MetaStyle;
    case "content":
      return Content;  

  }
};

export const Container = styled.div<SkeletonProps>`
  ${({ type }) => getSkeletonStyle(type)};
  background-image: linear-gradient(-90deg, #d3d3d3  0%, #6a6a6a 50%, #d3d3d3  100%);
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
