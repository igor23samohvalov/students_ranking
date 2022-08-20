import { createContext } from "react";

interface IUser {
  user: null | string;
  logIn: () => void;
  logOut: () => void;
}

const UserContext = createContext({} as IUser);

export default UserContext;
