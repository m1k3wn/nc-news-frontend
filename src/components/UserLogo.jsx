import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function UserLogo() {
  const { user } = useContext(UserContext);
  return (
    <>
      <h2 className="header-user-logo"> Welcome {user}</h2>
    </>
  );
}
