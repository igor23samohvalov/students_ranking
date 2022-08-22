import Select from "react-select";
import styled from "styled-components";

export const options = [
  { value: false, label: "ВСЕ" },
  { value: "10А", label: "10А" },
  { value: "10Б", label: "10Б" },
  { value: "11А", label: "11А" },
  { value: "11Б", label: "11Б" },
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
