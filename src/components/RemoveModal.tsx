import React from "react";
import { ModalContainer, ModalBody } from "./styles/AddModal.styled";
import { useAppDispatch } from "../hooks/reduxHooks";
import { removeStudent } from "../store/studentsSlice";
import Button from "./styles/Button.styled";
import { ButtonBlock, Title } from "./styles/RemoveModal.styled";

type RemoveModalProps = {
  setRemoveModal: React.Dispatch<React.SetStateAction<any>>;
  isShownRemoveModal: boolean;
  id: string;
};

function RemoveModal({
  setRemoveModal,
  isShownRemoveModal,
  id,
}: RemoveModalProps) {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setRemoveModal({
      shown: false,
      id: "",
    });
  };
  const handleRemove = () => {
    dispatch(removeStudent(id));
    handleClose();
  };

  return (
    <ModalContainer display={Number(isShownRemoveModal)}>
      <ModalBody>
        <Title>Удалить студента?</Title>
        <ButtonBlock>
          <Button onClick={handleClose}>Помиловать</Button>
          <Button onClick={handleRemove}>Отчислить</Button>
        </ButtonBlock>
      </ModalBody>
    </ModalContainer>
  );
}

export default RemoveModal;
