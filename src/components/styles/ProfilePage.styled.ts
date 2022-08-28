import styled from "styled-components";

export const ProfileContainer = styled.section`
  font-family: "Press Start 2P", cursive;
  display: flex;
  justify-content: space-between;
  background-color: #fcbd80;
  border: 2px solid #451b0b;
  border-radius: 10px;
  max-width: 828px;
  min-height: 500px;
  margin: 0 auto;

  > div {
    display flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    flex-grow: 1;
    font-size: 14px;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;

      img {
        width: 6rem;
        height: 6rem;
      }
    }

    button {
      margin-top: auto;
      align-self: flex-start;
      padding: 0.5rem;
      box-shadow: none;
      height: fit-content;
      width: fit-content;
    }

    h3 {
      margin-top: 0;
    }

    &:last-of-type {
      border-left: 2px solid #451b0b;
      background-color: #ece4e4;
      border-radius: 10px 0 0 10px;

      button {
        align-self: flex-end;
      }
    }
  }
`;

export const Placeholder = 1;
