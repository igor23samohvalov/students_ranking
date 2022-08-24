import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "./Header";

function MainLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) navigate("/");
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
