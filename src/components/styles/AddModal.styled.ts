import { Form } from "formik";
import styled from "styled-components";

interface IModal {
  display: number;
}

export const ModalContainer = styled.div<IModal>`
  display: ${({ display }) => (display ? "block;" : "none;")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.5s 0s ease;
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background-color: #fcbd80;
  border: 2px solid #451b0b;
  border-radius: 10px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
`;

export const StyledForm = styled(Form)`
  font-family: "Press Start 2P", cursive;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;

    input {
      font-family: "Press Start 2P", cursive;
      border: 1px solid #451b0b;
      background-color: #fcbd80;
      padding: 1rem;
    }
  }
  > div {
    display: flex;
    justify-content: flex-end;

    label {
      display: flex;
      align-items: center;

      input {
        font-size: 12px;
        margin: 0.5rem 1rem 0.5rem 2rem;
      }
    }
  }
`;
