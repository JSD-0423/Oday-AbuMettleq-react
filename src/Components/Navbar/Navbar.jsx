import { ThemeProvider } from "../../context/ThemeContext";
import { useTheme, useThemeUpdate } from "../../hooks/useTheme";
import { getLocalStorageItem } from "../../shared/modules/local";
import { IconButton } from "../IconButton/IconButton";
import {
  StyledNavbar,
  StyledPageTitle,
  StyledButtonContainer,
} from "./Navbar.styles";

import { Link } from "react-router-dom";

export function Navbar({ pageTitle }) {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const currentTheme = getLocalStorageItem("theme");
  useThemeUpdate(currentTheme);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
