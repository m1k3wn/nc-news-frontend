import { Link } from "react-router";

export default function HomeLogo() {
  return (
    <div>
      <Link to={"/"} className="home-logo-link">
        Good News
      </Link>
    </div>
  );
}
