import { Formik, FormikHelpers, Field } from "formik";
import { fsMethods } from "../lib/firebase";
import { IStudentId } from "../Types/IStudent";
import {
  ModalBody,
  ModalContainer,
  StyledForm,
} from "./styles/AddModal.styled";
import Button from "./styles/Button.styled";
import CloseIcon from "./styles/CloseIcon";
import { defaultOptions, StyledSelect } from "./styles/StyledSelect";

interface IValues {
  name: string;
  surname: string;
  form: string;
  rating: number;
}

function EditModal({
  setEditModal,
  isShownEditModal,
  student,
  addStudent,
}: {
  setEditModal: React.Dispatch<React.SetStateAction<any>>;
  isShownEditModal: boolean;
  student: IStudentId;
  addStudent: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { surname, name, rating, form, id } = student;

  return (
    <ModalContainer display={Number(isShownEditModal)}>
      <ModalBody>
        <Formik
          initialValues={{
            name,
            surname,
            form,
            rating,
          }}
          enableReinitialize
          onSubmit={async (
            values: IValues,
            { setSubmitting, resetForm }: FormikHelpers<IValues>,
          ) => {
            setSubmitting(true);
            try {
              fsMethods.editStudent(id, { ...values });
              setEditModal({ student: {}, shown: false });
              fsMethods.loadStudents(addStudent);
              resetForm();
            } catch (error) {
              alert(error);
            }
            setSubmitting(false);
          }}
        >
          {(formik) => (
            <StyledForm inputwidth="0.5fr">
              <label>
                Имя:
                <Field type="text" name="name" placeholder="Иван" />
              </label>
              <label>
                Фамилия:
                <Field type="text" name="surname" placeholder="Иванов" />
              </label>
              <label>
                Класс:
                <StyledSelect
                  name="form"
                  placeholder="10А"
                  options={defaultOptions}
                  isSearchable={false}
                  onChange={(e: any) => {
                    formik.setFieldValue("form", e.value);
                  }}
                />
              </label>
              <label>
                Рейтинг:
                <Field type="number" name="rating" placeholder="50" />
              </label>
              <Button type="submit">Сохранить</Button>
              <CloseIcon
                onClick={() => setEditModal({ student: {}, shown: false })}
              />
            </StyledForm>
          )}
        </Formik>
      </ModalBody>
    </ModalContainer>
  );
}

export default EditModal;
