import { IconContext } from "react-icons";
import {
  IoSettings,
  IoPersonRemoveSharp,
  IoPersonAddSharp,
} from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdNoteAdd } from "react-icons/md";
import { TbArrowBack, TbNotesOff } from "react-icons/tb";

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

export function RemoveStudentIcon() {
  return (
    <IconContext.Provider value={{ size: "2em", color: "#a10035" }}>
      <IoPersonRemoveSharp />
    </IconContext.Provider>
  );
}

export function RemoveEntryIcon() {
  return (
    <IconContext.Provider value={{ size: "2em", color: "#a10035" }}>
      <TbNotesOff />
    </IconContext.Provider>
  );
}

export function AddStudentIcon() {
  return (
    <IconContext.Provider value={{ size: "2em", color: "#fff" }}>
      <IoPersonAddSharp />
    </IconContext.Provider>
  );
}

export function EntryAddIcon() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <MdNoteAdd />
    </IconContext.Provider>
  );
}

export function BackIcon() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <TbArrowBack />
    </IconContext.Provider>
  );
}
