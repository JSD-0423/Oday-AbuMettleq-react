import { TextButton } from "../TextButton/TextButton";
import { StyledNavbar, StyledPageTitle } from "./Navbar.styles";
export function Navbar(props) {
  return (
    <StyledNavbar>
      <StyledPageTitle> {props.pageTitle}</StyledPageTitle>

      <div>
        <TextButton Title={props.title[0]} name={props.title[0]} />
        <TextButton Title={props.title[1]} name={props.title[1]} />
      </div>
    </StyledNavbar>
  );
}
