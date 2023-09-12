import React from "react";

import * as S from "./styles";
import Skeleton from "../../Skeleton";

const PostContentLoading = () => {
  return (
    <S.Container>
      <S.PostContent>
        <Skeleton type="title" />
        <Skeleton type="info" width="40%" />

        <Skeleton type="image" width="95%" marginTop="2.5rem" />

        <Skeleton type="content" width="50%" marginTop="2.5rem" />
        <Skeleton type="content" width="50%" marginTop="1rem" />
        <Skeleton type="content" width="50%" marginTop="1rem" />
        <Skeleton type="content" width="50%" marginTop="1rem" />
        <Skeleton type="content" width="50%" marginTop="1rem" />
        <Skeleton type="content" width="50%" marginTop="1rem" />
      </S.PostContent>
    </S.Container>
  );
};

export default PostContentLoading;
