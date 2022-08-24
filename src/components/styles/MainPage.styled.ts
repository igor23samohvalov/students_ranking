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
  width: 70%;
  height: 80vh;
  overflow: auto;
  padding-bottom: 1rem;
  padding-right: 0.2rem;

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
