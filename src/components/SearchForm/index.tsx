import { FormEvent, useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useSearchTerm } from "../../contexts/SearchTermContext";

type SearchFormProps = {
  onSearch: (searchTerm: string) => void;
};

const SearchForm = ({ onSearch }: SearchFormProps) => {
  const { searchTerm, setSearchTerm } = useSearchTerm(); // Use o hook para acessar o termo de pesquisa

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(searchTerm);
    }
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <S.SearchContainer onSubmit={handleSearch}>
      <S.SearchInput
        type="search"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </S.SearchContainer>
  );
};

export default SearchForm;
