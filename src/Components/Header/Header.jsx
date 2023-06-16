import { StyledHeader } from "./Header.styles";
import { Navbar } from "../Navbar/Navbar";
export function Header({ pageTitle, icons }) {
  return (
    <StyledHeader>
      <Navbar pageTitle={pageTitle} icons={icons}></Navbar>
    </StyledHeader>
  );
}
