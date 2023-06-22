import { ThemeContext } from "../../context/ThemeContext";
import React, { useContext } from "react";
import { IconButton } from "../IconButton/IconButton";
import {
  StyledNavbar,
  StyledPageTitle,
  StyledButtonContainer,
} from "./Navbar.styles";
import { useTheme, useThemeUpdate } from "../../hooks/useTheme";
import { Link } from "react-router-dom";

export function Navbar({ pageTitle }) {

  const toggleTheme = useThemeUpdate();

  return (
    <StyledNavbar className="container">
      <Link to={"/"}>
      <StyledPageTitle> {pageTitle}</StyledPageTitle>
      </Link>
      <StyledButtonContainer>
        <IconButton
          ButtonContent={"Theme toggle"}
          iconName={"moon-outline"}
          onClickCallBack={toggleTheme}
        />
        <IconButton ButtonContent={"Favorites"} iconName={"heart-outline"} />
      </StyledButtonContainer>
    </StyledNavbar>
  );
}
