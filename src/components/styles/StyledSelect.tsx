import Select from "react-select";
import styled from "styled-components";

export const options = [
  { value: "all", label: "ВСЕ" },
  { value: "10A", label: "10A" },
  { value: "10B", label: "10B" },
  { value: "11A", label: "11A" },
  { value: "11B", label: "11B" },
];

export const StyledSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fcbd80",
      borderRadius: "5px",
      border: "1px solid #451b0b",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      backgroundColor: state.isSelected ? "#b47c57" : "#fcbd80",
      border: "none",
    }),
  },
})`
  width: 100%;
  font-family: "Press Start 2P", cursive;
  font-size: 12px;
  color: #451b0b;

  & > div[id] {
    background-color: #fcbd80;
  }

  .css-1hb7zxy-IndicatorsContainer {
    span {
      background-color: #451b0b;
    }
    div {
      color: #451b0b;
    }
  }
`;
