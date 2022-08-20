import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

function Layoyt() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/");
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layoyt;
