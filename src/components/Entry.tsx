import useAuth from "../hooks/useAuth";
import { IEntryId } from "../Types/IEntry";
import ButtonIconStyled from "./styles/ButtonIcon.styled";
import { EntryCard, EntryValue } from "./styles/Entry.styled";
import { EditIcon, RemoveEntryIcon } from "./styles/StyledIcons.styled";

function Entry({
  data,
  showRemoveEntry,
  showEditEntry,
}: {
  data: IEntryId;
  showRemoveEntry: React.Dispatch<React.SetStateAction<any>>;
  showEditEntry: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { user } = useAuth();
  const { value, comment } = data;
  const sign = value >= 0 ? "+" : "";

  const handleEdit = () => {
    showEditEntry({ shown: true, entry: data });
  };
  const handleRemove = () => {
    showRemoveEntry({ shown: true, id: data.id });
  };

  return (
    <EntryCard>
      <EntryValue numvalue={value}>
        {sign}
        {value}
      </EntryValue>
      <span>{comment}</span>
      <div>
        {user.role === "teacher" ? (
          <>
            <ButtonIconStyled onClick={handleEdit}>
              <EditIcon />
            </ButtonIconStyled>
            <ButtonIconStyled onClick={handleRemove}>
              <RemoveEntryIcon />
            </ButtonIconStyled>
          </>
        ) : null}
      </div>
    </EntryCard>
  );
}

export default Entry;
