import { ModalContainer, ModalBody } from "./styles/AddModal.styled";
import { useAppDispatch } from "../hooks/reduxHooks";
import { removeStudent } from "../store/studentsSlice";
import Button from "./styles/Button.styled";
import { ButtonBlock, Title } from "./styles/RemoveModal.styled";
import { removeEntry } from "../store/entriesSlice";

type RemoveModalProps = {
  showModal: React.Dispatch<React.SetStateAction<any>>;
  id: string;
  entity: string;
};

function RemoveModal({ showModal, id, entity }: RemoveModalProps) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    showModal({
      shown: false,
      id: "",
    });
  };
  const handleRemove = () => {
    if (entity === "student") dispatch(removeStudent(id));
    else dispatch(removeEntry(id));

    handleClose();
  };

  return (
    <ModalContainer>
      <ModalBody>
        <Title>Удалить {entity === "student" ? "студента" : "запись"}?</Title>
        <ButtonBlock>
          <Button onClick={handleClose}>Оставить</Button>
          <Button onClick={handleRemove}>Удалить</Button>
        </ButtonBlock>
      </ModalBody>
    </ModalContainer>
  );
}

export default RemoveModal;
