import { Link } from "react-router";

export default function HomeLogo() {
  return (
    <div>
      <Link to={"/"} className="home-logo-link">
        Home Logo Here
      </Link>
    </div>
  );
}
