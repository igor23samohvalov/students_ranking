import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import UserContext from "../hooks/hooks";
import { auth } from "../lib/firebase";

export default function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<null | string>(null);

  const logIn = (login: any) => {
    setUser(login);
  };
  const logOut = async () => {
    setUser(null);
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("user is in: ", user);
        // user
        //   .getIdTokenResult()
        //   .then((idTokenResult) => {
        //     if (idTokenResult.claims?.role) logIn(idTokenResult.claims.role);
        //     else logIn("student");

        //     console.log(idTokenResult);
        //   })
        //   .catch(console.log);
        if (user.uid === "jhxsZsaQb8TtBiW1eVf8k0D8MSl2") logIn("teacher");
        else logIn("student");
      } else {
        logOut();
        console.log("user is out");
      }
    });
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
