import {
  StyledCardImg,
  StyledDetailsCard,
  StyledCardSection,
} from "./DetailsCard.styles";
import "./DetailsCard.moduleStyle.css";
import IonIcon from "../../common/IonIcon/IonIcon";


export function DetailsCard({ imgUrl, author, title }) {
  return (
    <StyledDetailsCard>
      {console.log(imgUrl)}
      <StyledCardImg src={"../images/" + imgUrl}></StyledCardImg>

      <StyledCardSection>
        <h3 className="cardTitle">
          <strong>{title}</strong> by <a href="$">{author}</a>
        </h3>
        <div className="favoritesButtonContainer">
          <h3>Interested in this topic?</h3>
          <button className="favoritesButton">
            <p>Add to Favorites</p>
            <IonIcon
              iconName={"heart-outline"}
              customStyle={{
                fontSize: "2rem",
              }}
            ></IonIcon>
          </button>
          <h4>Unlimited Credits</h4>
        </div>
      </StyledCardSection>
    </StyledDetailsCard>
  );
}
