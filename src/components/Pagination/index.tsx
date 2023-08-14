import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import * as S from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
  fetchMorePosts: (index: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  fetchMorePosts,
}: PaginationProps) => {
  
  const handlePreviousClick = () => {
    onPageChange(currentPage <= 1 ? 1 : currentPage - 1);
    fetchMorePosts(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage > totalPages ? totalPages : currentPage + 1);
    fetchMorePosts(currentPage + 1);
  };

  return (
    <S.PaginationContainer>
      {currentPage > 1 && (
        <S.PaginationButton onClick={handlePreviousClick}>
          <FaAngleLeft size={18} color="#e9e9ed" />
        </S.PaginationButton>
      )}
      <S.PaginationText>
        Página {currentPage} de {totalPages}
      </S.PaginationText>

      {currentPage < totalPages && (
        <S.PaginationButton onClick={handleNextClick}>
          <FaAngleRight size={18} color="#e9e9ed" />
        </S.PaginationButton>
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
