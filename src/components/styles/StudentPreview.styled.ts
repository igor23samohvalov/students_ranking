import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  font-family: "Press Start 2P", cursive;
  display: flex;
  justify-content: space-between;
  background-color: #e9d2b8;
  border-bottom: 1px solid #bc8c61;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  // &:hover {
  //   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  // }
`;

export const CardTitle = styled.h3`
  font-family: "Press Start 2P", cursive;
  text-transform: uppercase;
  margin: 2rem auto;
`;

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  gap: 0.5rem;

  > * {
    margin: 0;
  }
  h4 {
    font-size: 15px;
  }
  span {
    font-size: 14px;
  }

  &:first-of-type {
    font-family: "Press Start 2P", cursive;
    color: #cd7f32;
    font-size: 20px;
    padding-left: 1rem;
  }
  &:last-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    padding: 1rem 2rem;

    > button {
      padding: 0.5rem;
      height: fit-content;
      width: fit-content;
    }
  }
`;

export const CardImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border: 3px solid #451b0b;
`;
