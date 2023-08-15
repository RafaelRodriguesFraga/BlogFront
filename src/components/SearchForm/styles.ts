import styled from "styled-components";

export const SearchContainer = styled.form`
 
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  border-radius: 100px;
  height: 2rem;
  padding: 10px;
  outline: none;
  background: rgba(31, 41, 55, 0.60); 
  border: none;
  color: white;
`;
