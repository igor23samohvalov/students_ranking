import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  padding: 3rem;
  background-color: #fcbd80;
  border: 2px solid #451b0b;
  border-radius: 10px;

  > {
    display flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h3 {
      margin-top: 0;
    }
  }
`;

export const Placeholder = 1;
