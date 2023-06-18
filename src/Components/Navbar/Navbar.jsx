import { IconButton } from "../IconButton/IconButton";
import {
  StyledNavbar,
  StyledPageTitle,
  StyledButtonContainer,
} from "./Navbar.styles";
import React from "react";

export function Navbar({ pageTitle, icons }) {
  const iconList = icons.map((icon) => (
    <IconButton ButtonContent={icon.title} iconName={icon.name} />
  ));

  return (
    <StyledNavbar className="container">
      <StyledPageTitle> {pageTitle}</StyledPageTitle>

      <StyledButtonContainer>{iconList}</StyledButtonContainer>
    </StyledNavbar>
  );
}
