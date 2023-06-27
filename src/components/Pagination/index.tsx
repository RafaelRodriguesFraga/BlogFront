import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./styles.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePreviousClick = () => {
    onPageChange(currentPage <= 1 ? 1 : currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage > totalPages ? totalPages : currentPage + 1);
  };

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button className="pagination-button" onClick={handlePreviousClick}>
          <FaAngleLeft size={18} color="#e9e9ed" />
        </button>
      )}
      <span>
        Página {currentPage} de {totalPages}
      </span>

      {currentPage < totalPages && (
        <button className="pagination-button" onClick={handleNextClick}>
          <FaAngleRight size={18} color="#e9e9ed" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
