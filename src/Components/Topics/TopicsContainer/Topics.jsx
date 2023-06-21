import { reloadPage } from "../../../utils/ReloadPage";
import { IconButton } from "../../IconButton/IconButton";
import { Results } from "../../Results/Results";
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
          onClickCallBack={reloadPage()}
        ></IconButton>
      </StyledTopicsNotLoading>
    );
  }
  const topicList = TopicsArray.map((topicCard) => (
    <TopicCard
      id={topicCard.id}
      topic={topicCard.topic}
      name={topicCard.name}
      image={topicCard.image}
      rating={topicCard.rating}
      category={topicCard.category}
    ></TopicCard>
  ));

  return (
    <>
      <Results resultsContent={'"' + TopicsArray.length + '" Web Topics Found'} />
      <StyledTopicsContainer className="container">
        {topicList}
      </StyledTopicsContainer>
    </>
  );
}
