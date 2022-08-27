import { Formik, FormikHelpers, Field } from "formik";
import { useAppDispatch } from "../hooks/reduxHooks";
import { editStudent } from "../store/studentsSlice";
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
}: {
  setEditModal: React.Dispatch<React.SetStateAction<any>>;
  isShownEditModal: boolean;
  student: IStudentId;
}) {
  const dispatch = useAppDispatch();
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
            { resetForm }: FormikHelpers<IValues>,
          ) => {
            dispatch(editStudent({ ...values, id }));
            setEditModal({ student: {}, shown: false });
            resetForm();
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
