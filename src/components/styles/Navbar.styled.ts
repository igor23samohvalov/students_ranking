import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.5rem 0;
  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
