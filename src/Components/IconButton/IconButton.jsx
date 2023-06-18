import IonIcon from "../Global/IonIcon/IonIcon";
import { StyledIconButton, StyledTextButtonContent } from "./IconButton.styles";

export function IconButton({ iconName, ButtonContent, onClickCallBack }) {
  return (
    <StyledIconButton onClick={onClickCallBack}>
      {iconName ? <IonIcon iconName={iconName}></IonIcon> : <></>}
      <StyledTextButtonContent>{ButtonContent}</StyledTextButtonContent>
    </StyledIconButton>
  );
}
