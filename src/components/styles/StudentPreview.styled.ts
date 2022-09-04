import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.div)`
  font-family: "Press Start 2P", cursive;
  display: flex;
  justify-content: space-between;
  background-color: #e9d2b8;
  border-bottom: 1px solid #bc8c61;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    background-color: #dbc5ab;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardTitle = styled.h4`
  font-family: "Press Start 2P", cursive;
  text-transform: uppercase;
  margin: 2rem auto;
  text-align: center;
`;

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  gap: 0.5rem;

  > * {
    margin: 0;

    @media (max-width: 768px) {
      text-align: center;
    }
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

    @media (max-width: 768px) {
      justify-content: center;
      margin: 0;
    }

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

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
