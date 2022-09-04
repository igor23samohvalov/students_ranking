import styled from "styled-components";

export const ProfileContainer = styled.section`
  font-family: "Press Start 2P", cursive;
  display: flex;
  justify-content: space-between;
  background-color: #fcbd80;
  border: 2px solid #451b0b;
  border-radius: 10px;
  max-width: 828px;
  height: 550px;
  margin: 0 auto;

  @media (max-width: 768px) {
    position: relative;
    height: 83vh;
  }

  > div {
    display flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    flex-grow: 1;
    font-size: 14px;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;

      > div:first-of-type {
        align-items: flex-end;
        margin-bottom: 2rem;
      }
    }

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

    > button {
      margin-top: auto;
      align-self: flex-start;
      padding: 0.5rem;
      box-shadow: none;
      height: fit-content;
      width: fit-content;

      @media (max-width: 768px) {
        position: absolute;
        top: 2rem;
        right: 2rem;
      }
    }

    h3 {
      margin-top: 0;
    }

    &:last-of-type {
      border-left: 2px solid #451b0b;
      background-color: #ece4e4;
      border-radius: 10px 0 0 10px;

      @media (max-width: 768px) {
        border-radius: 0 0 10px 10px;
        border-left: none;
        border-top: 2px solid #451b0b;
        height: 100%;
      }

      button {
        align-self: flex-end;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EntriesContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding-right: 0.2rem;
  height: 100%;

  h4 {
    text-align: center;
  }

  > button {
    margin-top: auto;
    align-self: flex-start;
    padding: 0.5rem;
    box-shadow: none;
    height: fit-content;
    width: fit-content;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: hsla(37, 100%, 68%, 0.14);
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: #b47c57;
    box-shadow: inset 2px 2px 5px 0 rgba(#b47c57, 0.5);
  }
`;
