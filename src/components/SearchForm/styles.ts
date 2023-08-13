import styled from "styled-components";

export const SearchContainer = styled.form`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  border-radius: 10px;
  height: 1.75rem;
  padding: 10px;
  outline: none;
`;
