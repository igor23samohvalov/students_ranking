import styled from "styled-components";

export default styled.button`
  border: none;
  color: #451b0b;
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  border-radius: 50%;

  &:hover {
    scale: 1.1;
  }
`;
