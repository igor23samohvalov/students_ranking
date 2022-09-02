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
  position: relative;
  display flex;
  flex-direction: column;
  width: 70%;
  height: 80vh;
  
  > div {
    border: 2px solid #bc8c61;
  }
  > div:first-of-type, > div:last-of-type {
    background-color: #bc8c61;
    border-radius: 3rem 3rem 0 0;
    height: 40px;
    // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  > div:last-of-type {
    border-radius: 0 0 3rem 3rem;
  }
  > div:nth-of-type(2) {
    overflow: auto;
    height: 100%;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    padding: 1rem 0;
    background-color: #e9d2b8;
    // padding-right: 0.2rem;

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
  }
`;
