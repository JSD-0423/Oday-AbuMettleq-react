import IonIcon from "../IonIcon/IonIcon";
import { StyledFooter } from "./StyledFooter";

export function Footer() {
  return (
    <StyledFooter className="container">
      <p>Developed with</p>
      <IonIcon iconName={"heart"} customStyle={{ color: "#dc143c" }}></IonIcon>
      <p>&copy; 2023</p>
    </StyledFooter>
  );
}
