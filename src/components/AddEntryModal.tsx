import { Formik, FormikHelpers, Field } from "formik";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addEntry } from "../store/entriesSlice";
import {
  ModalContainer,
  StyledForm,
  ModalBody,
} from "./styles/AddModal.styled";
import Button from "./styles/Button.styled";
import CloseIcon from "./styles/CloseIcon";

interface IValues {
  value: number;
  comment: string;
}
type AddModalProps = {
  isAddEntryShown: boolean;
  showAddEntry: React.Dispatch<React.SetStateAction<boolean>>;
  studentId: string;
};

function AddEntryModal({
  isAddEntryShown,
  showAddEntry,
  studentId,
}: AddModalProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    showAddEntry(false);
  };

  return (
    <ModalContainer display={Number(isAddEntryShown)}>
      <ModalBody>
        <Formik
          initialValues={{
            value: 0,
            comment: "",
          }}
          onSubmit={async (
            values: IValues,
            { resetForm }: FormikHelpers<IValues>,
          ) => {
            dispatch(addEntry({ ...values, studentId, added: "now" }));
            showAddEntry(false);
            resetForm();
          }}
        >
          {() => (
            <StyledForm inputwidth="0.5fr">
              <label>
                Баллы:
                <Field type="number" name="value" placeholder="0" />
              </label>
              <label>
                Комментарий:
                <Field type="text" name="comment" placeholder="Ко" />
              </label>
              <Button type="submit">Добавить</Button>
              <CloseIcon onClick={handleClick} />
            </StyledForm>
          )}
        </Formik>
      </ModalBody>
    </ModalContainer>
  );
}

export default AddEntryModal;
