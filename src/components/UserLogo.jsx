import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function UserLogo() {
  const { user } = useContext(UserContext);
  return (
    <div className="header-user-logo">
      <p id="header-user-welcome"> Hey there</p>
      <p id="header-user-name"> {user}</p>
    </div>
  );
}
