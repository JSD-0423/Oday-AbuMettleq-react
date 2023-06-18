import IonIcon from "../../Global/IonIcon/IonIcon";
import { StyledTopicCard } from "./TopicCard.styles";
import "./TopicCard.moduleStyle.css";
export default function TopicCard({
  imgURL,
  mainTitle,
  subTitle,
  rating,
  authorName,
  onclickCallback
}) {
  return (
    <a href="#">
      <StyledTopicCard
        className="grid-item"
        aria-label="Click this item to navigate to full details"
      >
        <img src={"images/".concat(imgURL)} alt={subTitle}className="topic-img" />
        <section className="topic-section">
          <div className="titles-container">
            <h2 className="main-title">{mainTitle}</h2>
            <h3 className="sub-title">{subTitle}</h3>
          </div>
          <div className="ratingStars">
            <IonIcon iconName={"star"} ></IonIcon>
            <IonIcon iconName={"star"}></IonIcon>
            <IonIcon iconName={"star"}></IonIcon>
            <IonIcon iconName={"star"}></IonIcon>
            <IonIcon iconName={"star-half-outline"}></IonIcon>
          </div>
          <h3 class="author">Author: {authorName}</h3>
        </section>
      </StyledTopicCard>
    </a>
  );
}
