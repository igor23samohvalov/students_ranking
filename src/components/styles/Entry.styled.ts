import styled from "styled-components";

export const EntryCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  align-items: center;
  align-self: flex-start;
`;

export const EntryValue = styled.span`
  background-color: ${({ numvalue }: { numvalue: number }) =>
    numvalue >= 0 ? "#224b0c" : "#a10035"};
  color: #fff;
  padding: 0.4rem;
`;
