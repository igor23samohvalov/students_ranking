import styled from "styled-components";
import loadingGif from "../../assets/loading.gif";

const Card = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  background-color: #e9d2b8;
  padding: 0 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transform: translate(-50%, 0);
`;

function PageLoader() {
  return (
    <Card>
      <img src={loadingGif} alt="loading_animation" width="200px" />
    </Card>
  );
}

export default PageLoader;
