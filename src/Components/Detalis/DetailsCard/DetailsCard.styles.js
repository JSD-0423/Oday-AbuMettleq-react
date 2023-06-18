import { styled } from "styled-components";

export const StyledDetailsCard = styled.aside`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.06) 0 4px 5px;
  padding: 2px;
  @media (min-width: 1435px) {
    position: absolute;
    right: 20%;
    top: 2rem;
  }
`;

export const StyledCardImg = styled.img`
  background-color: white;
  width: 20rem;
  object-fit: cover;
  height: 13rem;
  margin: 0px;
`;
export const StyledCardSection = styled.section`
  padding: 1rem;
  color: #333333;
`;
