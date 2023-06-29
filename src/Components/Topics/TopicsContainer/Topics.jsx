import {Results} from "../../Results/Results";
import TopicCard from "../TopicCard/TopicCard";
import {
    StyledTopicsContainer,

} from "./TopicsContainer.styles";

export function Topics({Topics}) {
    const topicList = Topics.map((topicCard) => (
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
            <Results resultsContent={'"' + Topics.length + '" Web Topics Found'}/>
            <StyledTopicsContainer className="container">
                {topicList}
            </StyledTopicsContainer>
        </>
    );
}
