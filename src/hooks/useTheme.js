import { useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "../context/ThemeContext";
import { getLocalStorageItem } from "../shared/modules/local";

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}


