import styled from "styled-components";

export const Title = styled.h3`
  font-family: "Press Start 2P", cursive;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 2rem;

  > button {
    &:hover {
      background-color: #224b0c;
    }

    :last-of-type {
      &:hover {
        background-color: #a10035;
      }
    }
  }
`;
