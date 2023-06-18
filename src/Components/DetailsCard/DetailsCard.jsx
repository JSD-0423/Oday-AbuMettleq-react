import IonIcon from "../Global/IonIcon/IonIcon";
import {
  StyledCardImg,
  StyledDetailsCard,
  StyledCardSection,
} from "./DetailsCard.styles";
import "./DetailsCard.moduleStyle.css"

export function DetailsCard({ imgUrl, author, mainTitle }) {
  return (
    <StyledDetailsCard>
      <StyledCardImg src={"images/" + imgUrl}></StyledCardImg>

      <StyledCardSection>
        <h3 className="cardTitle">
          <strong>{mainTitle}</strong> by <a href="$">{author}</a>
        </h3>
        <div className="favoritesButtonContainer">
          <h3>Interested in this topic?</h3>
          <button className="favoritesButton">
            <p>Add to Favorites</p>
            <IonIcon
              iconName={"heart-outline"}
              customStyle={{
                "font-size": "2rem",
              }}
            ></IonIcon>
          </button>
          <h4>Unlimited Credits</h4>
        </div>
      </StyledCardSection>
    </StyledDetailsCard>
  );
}
