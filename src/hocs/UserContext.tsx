import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import UserContext from "../hooks/hooks";
import { auth } from "../lib/firebase";
import { IUser } from "../Types/IUser";

const emails = ["standingtrial@yandex.ru", "sandypandaadv@outlook.com"];
const defaultUser = { role: "", email: "" };

export default function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IUser>(defaultUser);
  const [, loading] = useAuthState(auth);
  const [handyLoading, setHandyLoading] = useState<boolean>(true);

  const logIn = (login: IUser) => {
    setUser(login);
  };
  const logOut = async () => {
    setUser(defaultUser);
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("user is in: ", user);
        user
          .getIdTokenResult()
          .then((idTokenResult) => {
            // if (idTokenResult.claims?.role) logIn(idTokenResult.claims.role);
            // else logIn("student");
            if (emails.some((e) => e === idTokenResult.claims.email))
              logIn({
                role: "teacher",
                email: `${idTokenResult.claims.email}`,
              });
            else
              logIn({
                role: "student",
                email: `${idTokenResult.claims.email}`,
              });
          })
          .catch(console.log);
        // if (user.uid === "jhxsZsaQb8TtBiW1eVf8k0D8MSl2") logIn("student");
        // else logIn("teacher");
      } else {
        logOut();
        console.log("user is out");
      }
    });
  }, [auth]);
  useEffect(() => {
    if (loading) setHandyLoading(true);
    else setTimeout(() => setHandyLoading(false), 500);
  }, [loading]);

  return (
    <UserContext.Provider value={{ user, logIn, logOut, handyLoading }}>
      {children}
    </UserContext.Provider>
  );
}
