import { useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "../context/ThemeContext";

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
