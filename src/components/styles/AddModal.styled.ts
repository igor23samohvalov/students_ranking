import { Form } from "formik";
import { motion } from "framer-motion";
import styled from "styled-components";

interface IForm {
  inputwidth: string;
}

export const ModalContainer = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.01 },
}))`
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

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 90%;
  }
`;

export const StyledForm = styled(Form)<IForm>`
  font-family: "Press Start 2P", cursive;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  h2 {
    text-align: center;
  }

  > label {
    position: relative;
    display: grid;
    grid-template-columns: ${(props) => props.inputwidth} 1fr;
    align-items: center;
    gap: 2rem;
    justify-items: end;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-items: start;
      gap: 0.5rem;
      font-size: 14px;
    }

    input,
    textarea {
      font-family: "Press Start 2P", cursive;
      border: 2px solid #451b0b;
      background-color: #fcbd80;
      padding: 1rem;
      width: 100%;
    }
    textarea {
      grid-column: span 2;
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

export const ErrorMarkup = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: #a10035;
  color: #fff;
  padding: 0.3rem;
  font-size: 8px;

  @media (max-width: 768px) {
    top: 33%;
  }
`;
