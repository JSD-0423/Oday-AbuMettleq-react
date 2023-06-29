import { styled } from "styled-components";

export const StyledSubTopicsContainer = styled.div`
  margin-block: 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 625px) {
    padding-inline: 1.5rem;
    flex-direction: column;
  }
  @media (max-width: 978px) and (min-width: 626px) {
    flex-direction: column;
    padding-inline: 3.6rem;
  }
  @media (max-width: 1434px) {
    flex-direction: column;
    padding-bottom: 2rem;
  }
`;
export const StyledDiv = styled.div`
  padding-inline: 1.8rem;
  width: 100%;
  padding-block: 0.95rem;
  display: flex;
  justify-content: start;
  border-bottom: solid 1px var(--lines-color);
  align-items: center;
`;
export const StyledSection = styled.section`
  width: 100%;
  background-color: var(--bg-default);
  border-radius: 0.3rem;
  border: solid 1px var(--lines-color);
`;
export const StyledH2 = styled.h2`
  width: 100%;
  padding-inline: 1.8rem;
  color: var(--body-text);
  padding-block: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-bottom: solid 1px var(--lines-color);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const StyledH3 = styled.h3`
  width: 100%;
  color: var(--body-text);
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
