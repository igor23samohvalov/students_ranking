import { IconContext } from "react-icons";
import { IoSettings, IoPersonRemoveSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export function EditIcon() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <IoSettings />
    </IconContext.Provider>
  );
}

export function ProfileIcon() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <CgProfile />
    </IconContext.Provider>
  );
}

export function RemoveIcon() {
  return (
    <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
      <IoPersonRemoveSharp />
    </IconContext.Provider>
  );
}
