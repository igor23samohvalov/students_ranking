import styled from "styled-components";

export const MenuContainer = styled.section`
  font-family: "Press Start 2P", cursive;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: fit-content;
  padding: 2rem;
  border: 2px solid #bc8c61;
  border-radius: 0.5rem;
  background-color: #e9d2b8;
  gap: 1rem;
  text-align: start;

  h4 {
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
    gap: 1rem;
    text-align: start;

    h4 {
      font-size: 12px;
    }
  }
`;

export const StyledSomething = styled.input`
  width: 100%;
`;
