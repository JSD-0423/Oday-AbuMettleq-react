import IonIcon from "../../common/IonIcon/IonIcon";
import {
    StyledH2,
    StyledH3,
    StyledSection,
    StyledSubTopicsContainer,
    StyledDiv,
} from "./SubTopicsContainer.style";

export function SubTopicsContainer({topicName, subTopics}) {
    let id = 1;

    const subTopicsList = subTopics.map((element) => (
        <StyledDiv key={id++}>
            <IonIcon
                iconName={"checkmark-circle-outline"}
                customStyle={{color: " #03c180"}}
            ></IonIcon>
            <StyledH3>{element}</StyledH3>
        </StyledDiv>
    ));
    return (
        <StyledSubTopicsContainer className="details-container">
            <StyledSection className="main-width">
                <StyledH2>{topicName} Sub Topics</StyledH2>

                <div>{subTopicsList}</div>
            </StyledSection>
        </StyledSubTopicsContainer>
    );
}
