import { styled } from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 1.3rem;
  background-color: var(--bg-default);
  width: 100%;
  border-radius: 0.65rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px -5px;
  @media (max-width: 625px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-grow: 2;
`;

export const Input = styled.input`
  color: var(--body-text);
  font-size: 1rem;
  font-weight: 400;
  background-color: transparent;
  outline-color: var(--brand-primary);
  padding-left: 2.5rem;
  height: 100%;
  border-top-left-radius: 0.65rem;
  border-bottom-left-radius: 0.65rem;
  width: 100%;
  border: none;
  @media (max-width: 625px) {
    border-bottom-left-radius: 0;
    padding-block: 1rem;
  }
`;

export const SelectContainer = styled.div`
  flex-grow: 0.45;
  display: flex;
  @media (max-width: 625px) {
    flex-grow: 1;
    > * {
      &:first-child {
        border-right: solid 1px var(--lines-color);
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  color: var(--body-text);
  width: 100%;
  display: flex;
  justify-content: right;
  flex-direction: column;
  padding-inline: 0.7rem;
  border-left: solid 1px var(--lines-color);
  padding-block: 0.3rem;
  @media (max-width: 625px) {
    width: 100%;
    border-left: 0;
    border-top: solid 1px var(--lines-color);
  }
`;

export const SelectLabel = styled.label`
  font-size: 0.7rem;
  font-weight: 400;
  padding-inline: 4px;
`;

export const Select = styled.select`
  color: var(--body-text);
  background-color: var(--bg-default);
  border: none;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: left;
`;

export const Option = styled.option``;
