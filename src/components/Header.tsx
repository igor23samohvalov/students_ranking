import { useNavigate } from "react-router-dom";
import Wrapper from "./styles/Navbar.styled";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import useAuth from "../hooks/useAuth";

function Header() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logOut();
    navigate("/");
  };

  return (
    <header>
      <Container>
        <Wrapper>
          <Button>Профиль</Button>
          <Button onClick={handleClick}>Выйти</Button>
        </Wrapper>
      </Container>
    </header>
  );
}

export default Header;
