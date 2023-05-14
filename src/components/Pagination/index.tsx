import React from "react";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5rem",       
        gap: '1rem',
      }}
    >
      {
      currentPage > 1 &&
      
      <button onClick={handlePreviousClick}>
        Pagina anterior
      </button>
      }
      <div>
        Página {currentPage} de {totalPages}
      </div>
      <button disabled={currentPage === totalPages} onClick={handleNextClick}>
        Próxima página
      </button>
    </div>
  );
};

export default Pagination;
