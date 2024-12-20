import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="error-page">
      <h1 id="error-404-header">404: page not found</h1>
      <p>Soz we don't got that</p>
      <Link to="/" className="go-back-button">Go back to the homepage</Link>
    </div>
  );
}
