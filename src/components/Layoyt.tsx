import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layoyt() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layoyt;
