import IonIcon from "../Global/IonIcon/IonIcon";
import { StyledIconButton, StyledTextButtonContent } from "./IconButton.styles";

export function IconButton({ iconName, iconTitle }) {
  return (
    <StyledIconButton>
      <IonIcon iconName={iconName}></IonIcon>
      <StyledTextButtonContent class="text-btn-title">
        {iconTitle}
      </StyledTextButtonContent>
    </StyledIconButton>
  );
}
