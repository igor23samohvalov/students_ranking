import styled from "styled-components";

const StyledListLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, 0);

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #bc8c61;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
const StyledButtonLoader = styled.div`
  .lds-dual-ring {
    display: inline-block;
    width: 16px;
    height: 16px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 12px;
    height: 12px;

    border-radius: 50%;
    border: 2px solid #451b0b;
    border-color: #451b0b transparent #451b0b transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export function ListLoader() {
  return (
    <StyledListLoader>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledListLoader>
  );
}

export function ButtonLoader() {
  return (
    <StyledButtonLoader>
      <div className="lds-dual-ring" />
    </StyledButtonLoader>
  );
}
