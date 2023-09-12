import React from "react";
import * as S from "./styles";

export type SkeletonProps = {
  type: "image" | "info" | "title" | "meta" | "content";
  width?: string;
  marginTop?: string;
};

const Skeleton = ({ type, width, marginTop }: SkeletonProps) => {
  return <S.Container type={type} width={width} marginTop={marginTop} />;
};

export default Skeleton;
