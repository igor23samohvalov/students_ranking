import { Formik, FormikHelpers, Field } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addEntry } from "../store/entriesSlice";
import { editStudent } from "../store/studentsSlice";
import { IStudentId } from "../Types/IStudent";
import {
  ModalContainer,
  StyledForm,
  ModalBody,
  ErrorMarkup,
} from "./styles/AddModal.styled";
import Button from "./styles/Button.styled";
import CloseIcon from "./styles/CloseIcon";
import { ButtonLoader } from "./styles/Loader";

const addEntrySchema = Yup.object().shape({
  value: Yup.number().required("Обязательное поле"),
  comment: Yup.string().required("Обязательное поле"),
});

interface IValues {
  value: number;
  comment: string;
}
type AddModalProps = {
  isAddEntryShown: boolean;
  showAddEntry: React.Dispatch<React.SetStateAction<boolean>>;
  student: IStudentId;
};

function AddEntryModal({
  isAddEntryShown,
  showAddEntry,
  student,
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
          validationSchema={addEntrySchema}
          onSubmit={async (
            values: IValues,
            { resetForm }: FormikHelpers<IValues>,
          ) => {
            dispatch(
              addEntry({ ...values, studentId: student.id, added: "now" }),
            );
            dispatch(
              editStudent({
                ...student,
                rating: student.rating + values.value,
              }),
            );
            showAddEntry(false);
            resetForm();
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <StyledForm inputwidth="0.2fr">
              <label>
                Баллы:
                <Field
                  type="number"
                  name="value"
                  placeholder="0"
                  style={{
                    border: `2px solid${
                      errors.value && touched.value ? "#a10035" : "#451b0b"
                    }`,
                  }}
                />
                {errors.value && touched.value ? (
                  <ErrorMarkup>{errors.value}</ErrorMarkup>
                ) : null}
              </label>
              <label>
                Комментарий:
                <Field
                  component="textarea"
                  type="text"
                  name="comment"
                  placeholder="Ко"
                  rows="4"
                  style={{
                    border: `2px solid${
                      errors.comment && touched.comment ? "#a10035" : "#451b0b"
                    }`,
                  }}
                />
                {errors.comment && touched.comment ? (
                  <ErrorMarkup>{errors.comment}</ErrorMarkup>
                ) : null}
              </label>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <ButtonLoader /> : "Добавить"}
              </Button>
              <CloseIcon onClick={handleClick} />
            </StyledForm>
          )}
        </Formik>
      </ModalBody>
    </ModalContainer>
  );
}

export default AddEntryModal;
