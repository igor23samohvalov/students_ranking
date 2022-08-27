import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import useAuth from "../hooks/useAuth";
import { fetchStudents } from "../store/studentsSlice";
import Header from "./Header";
// import { fsMethods } from "../lib/firebase";

function MainLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) navigate("/");

    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
