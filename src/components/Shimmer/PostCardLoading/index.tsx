import React from "react";

import * as S from "./styles";
import Skeleton from "../../Skeleton";

const PostCardLoading = () => {
  return (
    <S.PostCard>     
        <Skeleton type="image" />

        <S.PostInfoContainer>
          <S.PostInfo>
            <Skeleton type="info" />
          </S.PostInfo>

          <S.PostContent>
            <Skeleton type="title" />
            <Skeleton type="meta" />
          </S.PostContent>
        </S.PostInfoContainer>
      
    </S.PostCard>
  );
};

export default PostCardLoading;
