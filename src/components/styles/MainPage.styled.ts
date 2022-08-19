import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  } ;
`;

export const StudentsContainer = styled.section`
  display flex;
  flex-direction: column;
  flex-grow: 3;
  height: 80vh;
  overflow: auto;
  padding: 2rem 0;
`;
