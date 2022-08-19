import Wrapper from "./styles/Navbar.styled";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";

function Header() {
  return (
    <header>
      <Container>
        <Wrapper>
          <Button>Добавить Ученика</Button>
          <Button>Выйти</Button>
        </Wrapper>
      </Container>
    </header>
  );
}

export default Header;
