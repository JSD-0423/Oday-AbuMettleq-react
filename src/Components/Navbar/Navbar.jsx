import { IconButton } from "../IconButton/IconButton";
import {
  StyledNavbar,
  StyledPageTitle,
  StyledButtonContainer,
} from "./Navbar.styles";
import React from "react";
export function Navbar({ pageTitle, icons }) {
  return (
    <StyledNavbar className="container">
      <StyledPageTitle> {pageTitle}</StyledPageTitle>

      <StyledButtonContainer>
        {icons.map((icon) => (
          <IconButton iconTitle={icon.title} iconName={icon.name} />
        ))}
      </StyledButtonContainer>
    </StyledNavbar>
  );
}
