import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
`;

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3.75rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 617px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 2rem;
  }

  @media (min-width: 618px) and (max-width: 926px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
  }
`;
