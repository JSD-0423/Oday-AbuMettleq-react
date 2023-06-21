import { reloadPage } from "../../../utils/ReloadPage";
import { IconButton } from "../../IconButton/IconButton";
import { StyledErrorContainer } from "./Error.styles";

export function ErrorContainer({ error }) {
  return (
    <StyledErrorContainer>
      <h2>{error}</h2>
      <IconButton
        ButtonContent={"Refresh the Page"}
        onClickCallBack={reloadPage()}
      ></IconButton>
    </StyledErrorContainer>
  );
}
