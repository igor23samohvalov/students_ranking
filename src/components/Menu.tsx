import React from "react";
import { MenuContainer } from "./styles/Menu.styled";
import Button from "./styles/Button.styled";
import { StyledSelect, allOptions } from "./styles/StyledSelect";

function Menu({
  setAddModal,
  setClassFilter,
}: {
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setClassFilter: React.Dispatch<React.SetStateAction<string | boolean>>;
}) {
  const handleClick = (): void => {
    setAddModal(true);
  };
  const handleChange = (e: any) => {
    setClassFilter(e.value);
  };

  return (
    <MenuContainer>
      <h4>Выбрать класс</h4>
      <StyledSelect
        options={allOptions}
        defaultValue={allOptions[0]}
        isSearchable={false}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>Добавить ученика</Button>
    </MenuContainer>
  );
}

export default Menu;
