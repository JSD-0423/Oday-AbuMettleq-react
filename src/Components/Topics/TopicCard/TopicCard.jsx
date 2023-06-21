import IonIcon from "../../common/IonIcon/IonIcon";
import { StyledTopicCard } from "./TopicCard.styles";
import "./TopicCard.moduleStyle.css";
import { Link } from "react-router-dom";
export default function TopicCard({
  id,
  topic,
  name,
  image,
  rating,
  category,
  onclickCallback,
}) {
  return (
    <Link to={`/details/`+id} style={{ textDecoration: "none" }}>
      <StyledTopicCard
        className="grid-item"
        aria-label="Click this item to navigate to full details"
      >
        <img src={"images/".concat(image)} alt={topic} className="topic-img" />
        <section className="topic-section">
          <div className="titles-container">
            <h2 className="category">{category}</h2>
            <h3 className="topic">{topic}</h3>
          </div>
          <div className="ratingStars">
            <IonIcon iconName={"star"}></IonIcon>
            <IonIcon iconName={"star"}></IonIcon>
            <IonIcon iconName={"star"}></IonIcon>
            <IonIcon iconName={"star"}></IonIcon>
            <IonIcon iconName={"star-half-outline"}></IonIcon>
          </div>
          <h3 className="author">Author: {name}</h3>
        </section>
      </StyledTopicCard>
    </Link>
  );
}
