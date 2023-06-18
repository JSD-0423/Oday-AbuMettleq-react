import IonIcon from "../../Global/IonIcon/IonIcon";
import {
  StyledH2,
  StyledH3,
  StyledSection,
  StyledSubTopicsContainer,
  StyledDiv,
} from "./SubTopicsContainer.style";

export function SubTopicsContainer({ topic, subTopics }) {
  const subTopicsList = subTopics.map((element) => (
    <StyledDiv>
      <IonIcon
        iconName={"checkmark-circle-outline"}
        customStyle={{ color: " #03c180" }}
      ></IonIcon>
      <StyledH3>{element}</StyledH3>
    </StyledDiv>
  ));
  return (
    <StyledSubTopicsContainer className="details-container">
      <StyledSection className="main-width">
        <StyledH2>{topic} Sub Topics</StyledH2>

        <div>{subTopicsList}</div>
      </StyledSection>
    </StyledSubTopicsContainer>
  );
}
