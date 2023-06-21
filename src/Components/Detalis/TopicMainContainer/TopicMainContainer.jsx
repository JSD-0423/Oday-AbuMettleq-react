
import IonIcon from "../../common/IonIcon/IonIcon";
import { DetailsCard } from "../DetailsCard/DetailsCard";
import {
  StyledCategory,
  StyledTopicMainContainer,
  StyledTitle,
  StyledDescription,
} from "./TopicMainContiner.styles";

export function TopicMainContainer({
  topic,
  category,
  description,
  rating,
  image,
  name,
}) {
  return (
    <StyledTopicMainContainer className="details-container">
      <div className="main-width">
        <StyledCategory>{category}</StyledCategory>
        <StyledTitle>{topic}</StyledTitle>
        <div className="rating">
          <IonIcon iconName={"star"} />
          <IonIcon iconName={"star"} />
          <IonIcon iconName={"star"} />
          <IonIcon iconName={"star"} />
          <IonIcon iconName={"star"} />
        </div>
        <StyledDescription>{description}</StyledDescription>
      </div>

      <DetailsCard
        imgUrl={image}
        mainTitle={topic}
        author={name}
      ></DetailsCard>
    </StyledTopicMainContainer>
  );
}
