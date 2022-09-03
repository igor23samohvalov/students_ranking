import { createContext } from "react";
import { IContext } from "../Types/IUser";

const UserContext = createContext({} as IContext);

export default UserContext;
