import { useContext } from "react";
import UserContext from "./hooks";

export default function () {
  return useContext(UserContext);
}
