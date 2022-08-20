import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e9d2b8;
  border: 5px solid #b8a590;
  margin-bottom: 2rem;
  width: 100%;
`;

export const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0.5rem;
  gap: 1rem;

  > * {
    margin: 0;
  }

  &:first-of-type {
    padding-left: 2rem;
  }
  &:last-of-type {
    margin-left: auto;
    border-left: 5px solid #b8a590;
    padding: 1rem 2rem;
  }
`;

export const CardImg = styled.img`
  width: 6rem;
  height: 6rem;
  border: 3px solid #451b0b;
`;
