import { styled } from "styled-components";
export const StyledNavbar = styled.nav`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 10px -5px;
  align-items: center;
`;
export const StyledPageTitle = styled.h1`
  font-size: 1rem;
  color: var(--brand-primary);
  font-weight: 400;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;
