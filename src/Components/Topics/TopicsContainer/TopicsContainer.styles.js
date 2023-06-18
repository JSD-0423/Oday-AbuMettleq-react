import { styled } from "styled-components";

export const StyledTopicsContainer = styled.div`
  width: inherit;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14.96rem, 1fr));
  justify-content: left;
  grid-gap: 2rem;
  margin-block: 2rem;
`;

export const StyledTopicsNotLoading = styled.div`
  padding-block: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
