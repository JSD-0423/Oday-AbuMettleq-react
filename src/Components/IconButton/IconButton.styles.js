import { styled } from "styled-components";
export const StyledIconButton = styled.button`
  color: #333333;
  height: 2rem;
  justify-content: center;
  padding-inline: 0.7rem;
  background: none;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  font-weight: 400;
  &:hover {
    background-color: #0768ac;
    transform: translateY(-1px);
  }
  &:active {
    background-color: #ffffff;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }
`;

export const StyledTextButtonContent = styled.p`
  @media (max-width: 625px) {
    display: none;
  }
`;
