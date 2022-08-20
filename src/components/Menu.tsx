import React from "react";
import { MenuContainer } from "./styles/Menu.styled";
import Button from "./styles/Button.styled";
import { StyledSelect, options } from "./styles/StyledSelect";

function Menu({
  setAddModal,
}: {
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = (): void => {
    setAddModal(true);
  };

  return (
    <MenuContainer>
      <StyledSelect
        options={options}
        placeholder="Выбрать класс"
        isSearchable={false}
      />
      <Button onClick={handleClick}>Добавить ученика</Button>
    </MenuContainer>
  );
}

export default Menu;
