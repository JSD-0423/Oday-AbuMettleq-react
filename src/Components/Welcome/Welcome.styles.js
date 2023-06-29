import { styled } from "styled-components";
export const StyledWelcome = styled.div`
  text-align: left;
  width: 100%;
  background-color: var(--bg-default);
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledGradiant = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const StyledWelcomeContent = styled.div`
  position: absolute;
  background-color: transparent;
  top: 7.4rem;
  padding-inline: 1rem;
  @media (max-width: 625px) {
    top: 6.9rem;
  }
`;
export const StyledWelcomeTitle = styled.h2`
  color: var(--brand-secondary);
  font-weight: 700;
  font-size: 1.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 625px) {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const StyledTriangle = styled.div`
  position: relative;
  top: ${(props) => props.top};
  z-index: ${(props) => props.zIndex};
  transform: skewY(${(props) => props.skewY}deg);
  height: ${(props) => props.height};
  background: ${(props) => props.background};
`;

export const StyledWelcomeSubTitle = styled.h3`
  color: var(--body-text);
  font-weight: 400;
  font-size: 1rem;
  @media (max-width: 625px) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
