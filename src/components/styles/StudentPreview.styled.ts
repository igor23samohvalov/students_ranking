import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  background-color: #e9d2b8;
  border: 5px solid #b8a590;
  margin-bottom: 2rem;
  width: 100%;
`;

export const CardTytle = styled.h3`
  font-family: "Press Start 2P", cursive;
  text-transform: uppercase;
  margin: 2rem auto;
`;

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0.5rem;
  gap: 1rem;

  > * {
    margin: 0;
  }

  &:first-of-type {
    padding-left: 2rem;
  }
  &:last-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    border-left: 5px solid #b8a590;
    padding: 1rem 2rem;

    > button {
      height: fit-content;
      width: fit-content;
    }
  }
`;

export const CardImg = styled.img`
  width: 6rem;
  height: 6rem;
  border: 3px solid #451b0b;
`;
