import { StyledResult } from "./Results.styles";

export function Results({ resultsContent }) {
  return <StyledResult className="container">{resultsContent}</StyledResult>;
}
