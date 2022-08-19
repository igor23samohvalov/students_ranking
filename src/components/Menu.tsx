import { MenuContainer } from "./styles/Menu.styled";
import Button from "./styles/Button.styled";

function Menu() {
  return (
    <MenuContainer>
      <h3>Выбрать класс:</h3>
      <p>10A</p>
      <p>10Б</p>
      <p>11A</p>
      <p>11Б</p>
      <Button>Добавить ученика</Button>
    </MenuContainer>
  );
}

export default Menu;
