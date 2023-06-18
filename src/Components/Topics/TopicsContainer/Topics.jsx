import { IconButton } from "../../IconButton/IconButton";
import TopicCard from "../TopicCard/TopicCard";

import {
  StyledTopicsContainer,
  StyledTopicsNotLoading,
} from "./TopicsContainer.styles";
export function Topics({ TopicsArray }) {
  if (TopicsArray == null) {
    return (
      <StyledTopicsNotLoading>
        <h2>Something went wrong. Web topics failed to load.</h2>
        <IconButton
          ButtonContent={"Reload"}
          onClickCallBack={() => {
            window.location.reload();
          }}
        ></IconButton>
      </StyledTopicsNotLoading>
    );
  }
  const topicList = TopicsArray.map((topicCard) => (
    <TopicCard
      imgURL={topicCard.imgURL}
      mainTitle={topicCard.mainTitle}
      subTitle={topicCard.subTitle}
      rating={topicCard.rating}
      authorName={topicCard.authorName}
    ></TopicCard>
  ));

  return (
    <StyledTopicsContainer className="container">
      {topicList}
    </StyledTopicsContainer>
  );
}
