
import {DetailsCard} from "../DetailsCard/DetailsCard";
import {
    StyledCategory,
    StyledTopicMainContainer,
    StyledTitle,
    StyledDescription,
} from "./TopicMainContiner.styles";
import {StarsContainer} from "../../common/Rating/StarsContainer";

export function TopicMainContainer({
                                       topic,
                                       category,
                                       description,
                                       rating,
                                       image,
                                       name,
                                   }) {
    return (
        <StyledTopicMainContainer className="details-container" >
            <div className="main-width">
                <StyledCategory>{category}</StyledCategory>
                <StyledTitle>{topic}</StyledTitle>
                <StarsContainer rating={rating}/>
                <StyledDescription>{description}</StyledDescription>
            </div>

            <DetailsCard
                imgUrl={image}
                title={topic}
                author={name}
            ></DetailsCard>
        </StyledTopicMainContainer>
    );
}
