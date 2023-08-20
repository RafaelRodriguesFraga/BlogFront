import React from "react";
import * as S from "./styles";

export type SkeletonProps = {
  type: "image" | "info" | "title" | "meta";
};

const Skeleton = ({ type }: SkeletonProps) => {
  return <S.Container type={type}/>;
};

export default Skeleton;
