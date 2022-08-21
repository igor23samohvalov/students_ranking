import { useContext } from "react";
import UserContext from "./hooks";

export default function useAuth() {
  return useContext(UserContext);
}
