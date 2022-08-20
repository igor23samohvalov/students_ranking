import { useState, useEffect } from "react";
import UserContext from "../hooks/hooks";

export default function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<null | string>(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    }
  }, []);

  const logIn = () => {
    localStorage.setItem("user", "user");
    setUser("user");
  };
  const logOut = () => {
    localStorage.removeItem("user");
    setUser("user");
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
