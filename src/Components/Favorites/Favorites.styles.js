import { styled } from "styled-components";

export const StyledSlider = styled.div`
  width: 100%;
  padding-inline-end: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 8rem;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
`;

export const StyledFavorites = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 11rem;
  background-color: var(--bg-default);
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
  box-shadow: rgba(69, 68, 68, 0.1) 0 0 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const FavoritesHeaderTitle = styled.h2`
  margin-top: 0.8rem;
  color: var(--body-text);
  font-size: 1rem;
  font-weight: 700;
`;
export const StyledFavoriteTopic = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  box-shadow: rgba(23, 23, 23, 0.1) 0px 0px 5px 1px;
  background-color: var(--bg-default);
  height: 7rem;
  width: 7.6rem;
  color: var(--body-text);
`;
export const StyledFavoriteTopicImage = styled.img`
  margin: 0;
  background-color: white;
  width: 100%;
  object-fit: cover;
  height: 55%;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
`;
export const StyledFavoriteTopicSection = styled.section`
  margin-top: 0.3rem;
  padding-inline: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
