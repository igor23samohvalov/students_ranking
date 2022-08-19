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
  padding: 2rem;
  gap: 1rem;

  > * {
    margin: 0;
  }
`;

export const CardImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  transform: translateY(-50%);
`;
