import UserLogo from "./UserLogo";
import HomeLogo from "./HomeLogo";
import TopicsMenuBar from "./TopicsMenuBar";

export default function Header() {
  return (
    <header className="header-component">
      <HomeLogo />
      <h1 className="main-app-title">Welcome to Good News</h1>
      <TopicsMenuBar />
      <UserLogo />
    </header>
  );
}
