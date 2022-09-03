import styled from "styled-components";

export const placeholder = styled.div`
  width: 100%;
`;

export const ModalInfo = styled.div`
  font-family: "Press Start 2P", cursive;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    text-align: center;
  }

  > label {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 2rem;
    align-items: center;
    justify-items: end;

    input {
      font-family: "Press Start 2P", cursive;
      border: 2px solid #451b0b;
      background-color: #fcbd80;
      padding: 1rem;
      width: 100%;
    }
  }
`;
