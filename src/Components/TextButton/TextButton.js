import { StyledTextButton } from "./TextButton.styles";

export function TextButton(props) {
  return (
    <StyledTextButton>
      <ion-icon name={props.name}></ion-icon>
      <p class="text-btn-title">{props.Title}</p>
    </StyledTextButton>
  );
}
