import { styled } from "styled-components";

export const StyledTopicMainContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: #333333;
  width: 100%;
  color: #ededed;
  gap: 1rem;
  
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

export const StyledCategory = styled.div`
  color: #03c180;
  font-size: 1rem;
  font-weight: 400;
`;
export const StyledTitle = styled.div`
  color: #ededed;
  font-size: 1.5rem;
  font-weight: 700;
`;
export const StyledDescription = styled.div`
  height: 100%;
  font-size: 1rem;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
