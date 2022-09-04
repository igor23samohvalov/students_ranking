import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";

export default styled(RiCloseLine).attrs({
  size: "1.7em",
})`
  position: absolute;
  top: -2rem;
  right: -2rem;
  color: #451b0b;
  cursor: pointer;

  @media (max-width: 768px) {
    top: -1rem;
    right: -1rem;
  }
`;
