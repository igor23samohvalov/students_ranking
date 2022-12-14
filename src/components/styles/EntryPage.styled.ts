import styled from "styled-components";

export default styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;

    > button {
      font-size: 12px;
    }
  }
`;
