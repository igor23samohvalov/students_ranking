import React from "react";
import { MenuContainer } from "./styles/Menu.styled";
import Button from "./styles/Button.styled";
import { StyledSelect, options } from "./styles/StyledSelect";

function Menu({
  setAddModal,
  setForm,
}: {
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setForm: React.Dispatch<React.SetStateAction<string | boolean>>;
}) {
  const handleClick = (): void => {
    setAddModal(true);
  };
  const handleChange = (e: any) => {
    setForm(e.value);
  };

  return (
    <MenuContainer>
      <label>
        Выбрать класс
        <StyledSelect
          options={options}
          defaultValue={options[0]}
          isSearchable={false}
          onChange={handleChange}
        />
      </label>
      <Button onClick={handleClick}>Добавить ученика</Button>
    </MenuContainer>
  );
}

export default Menu;
