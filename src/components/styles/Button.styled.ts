import styled from "styled-components";

export default styled.button`
  font-family: "Press Start 2P", cursive;
  padding: 1rem 2rem;

  border-radius: 0.5rem;
  border: 2px solid #451b0b;
  box-shadow: 0 0 0 2pt #bc8c61;
  color: #451b0b;
  background-color: #fcbd80;
  pointer: cursor;
  transition: all 0.2s 0s ease;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05, 1.05);
  }
`;
