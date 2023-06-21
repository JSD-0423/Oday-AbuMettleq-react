import { Link } from "react-router-dom";
import "./NotFound.styles.css";
import { IconButton } from "../../Components/IconButton/IconButton";
export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="notFound-header">404</h1>
      <p className="notFound-Paragraph">
        Oops! The page you're looking for is not found.
      </p>
      <Link to={"/"}>
        <IconButton ButtonContent={" Go back to Home"}></IconButton>
      </Link>
      .
    </div>
  );
}
