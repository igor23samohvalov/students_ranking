import { IEntry } from "../Types/IEntry";
import { EntryCard, EntryValue } from "./styles/Entry.styled";

function Entry({ data }: { data: IEntry }) {
  const { value, comment } = data;
  const sign = value >= 0 ? "+" : "";

  return (
    <EntryCard>
      <EntryValue numvalue={value}>
        {sign}
        {value}
      </EntryValue>
      <span>{comment}</span>
    </EntryCard>
  );
}

export default Entry;
