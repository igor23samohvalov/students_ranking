import { useEffect, useState } from "react";
import { Formik, FormikHelpers, Field } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../hooks/reduxHooks";
import { editStudent } from "../store/studentsSlice";
import { IStudentId } from "../Types/IStudent";
import {
  ErrorMarkup,
  ModalBody,
  ModalContainer,
  StyledForm,
} from "./styles/AddModal.styled";
import Button from "./styles/Button.styled";
import CloseIcon from "./styles/CloseIcon";
import { defaultOptions, StyledSelect } from "./styles/StyledSelect";

const editStudentSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  surname: Yup.string().required("Обязательное поле"),
  rating: Yup.number().required("Обязательное поли"),
});

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
  const [formIndex, setFormIndex] = useState<number>(0);

  useEffect(() => {
    setFormIndex(defaultOptions.findIndex((o) => o.value === form));
  }, [form]);

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
          validationSchema={editStudentSchema}
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
          {({ setFieldValue, errors, touched }) => (
            <StyledForm inputwidth="0.5fr">
              <label>
                Имя:
                <Field
                  type="text"
                  name="name"
                  placeholder="Иван"
                  style={{
                    border: `2px solid${
                      errors.name && touched.name ? "#a10035" : "#451b0b"
                    }`,
                  }}
                />
                {errors.name && touched.name ? (
                  <ErrorMarkup>{errors.name}</ErrorMarkup>
                ) : null}
              </label>
              <label>
                Фамилия:
                <Field
                  type="text"
                  name="surname"
                  placeholder="Иванов"
                  style={{
                    border: `2px solid${
                      errors.surname && touched.surname ? "#a10035" : "#451b0b"
                    }`,
                  }}
                />
                {errors.surname && touched.surname ? (
                  <ErrorMarkup>{errors.surname}</ErrorMarkup>
                ) : null}
              </label>
              <label>
                Класс:
                <StyledSelect
                  name="form"
                  options={defaultOptions}
                  defaultValue={defaultOptions[formIndex]}
                  isSearchable={false}
                  onChange={(e: any) => {
                    setFieldValue("form", e.value);
                  }}
                />
              </label>
              <label>
                Рейтинг:
                <Field
                  type="number"
                  name="rating"
                  placeholder="50"
                  style={{
                    border: `2px solid${
                      errors.rating && touched.rating ? "#a10035" : "#451b0b"
                    }`,
                  }}
                />
                {errors.rating && touched.rating ? (
                  <ErrorMarkup>{errors.rating}</ErrorMarkup>
                ) : null}
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
