import { useContext } from "react";
import { UserContext } from "../context/userContext";
import UserLogo from "./UserLogo";
import HomeLogo from "./HomeLogo";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="header-component">
      <HomeLogo />
      <h1 className="main-app-title">Welcome to Good News</h1>
      <UserLogo user={user} />
    </header>
  );
}
