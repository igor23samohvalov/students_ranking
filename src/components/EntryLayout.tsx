import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const EntryCard = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background-color: #fcbd80;
  border: 2px solid #451b0b;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

function EntryLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user.role) navigate("/main");
  }, [user]);

  return (
    <EntryCard>
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
    </EntryCard>
  );
}

export default EntryLayout;
