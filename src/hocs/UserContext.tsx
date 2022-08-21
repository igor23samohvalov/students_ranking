import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import UserContext from "../hooks/hooks";
import { auth } from "../lib/firebase";

export default function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<null | string>(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    }
  }, []);

  // const monitorAuthState = async () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log("logged in: ", user);
  //       localStorage.setItem("user", "user");
  //       setUser("user");
  //     } else {
  //       console.log("logged off");
  //     }
  //   });
  // };

  const logIn = (login: string) => {
    localStorage.setItem("user", login);
    setUser(login);
  };
  const logOut = async () => {
    localStorage.removeItem("user");
    setUser(null);
    await signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
