import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/reduxHooks";
import useAuth from "../hooks/useAuth";
import { fetchEntries } from "../store/entriesSlice";
import { fetchStudents } from "../store/studentsSlice";
import Header from "./Header";

function MainLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user.role) navigate("/");

    dispatch(fetchStudents());
    dispatch(fetchEntries());
  }, [dispatch, user, navigate]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
