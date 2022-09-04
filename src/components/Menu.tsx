import { MenuContainer } from "./styles/Menu.styled";
import { StyledSelect, allOptions } from "./styles/StyledSelect";

function Menu({
  setClassFilter,
}: {
  setClassFilter: React.Dispatch<React.SetStateAction<string>>;
}) {
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
    </MenuContainer>
  );
}

export default Menu;
