import { useEffect } from "react";
// import { connectAuthEmulator } from "firebase/auth";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { auth } from "../lib/firebase";

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
  useEffect(() => {
    // connectAuthEmulator(auth, "http://localhost:9099");
    if (localStorage.getItem("user")) navigate("/main");
  }, []);

  return (
    <EntryCard>
      <Outlet />
    </EntryCard>
  );
}

export default EntryLayout;
