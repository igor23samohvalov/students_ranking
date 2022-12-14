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
import { ButtonLoader } from "./styles/Loader";

const editStudentSchema = Yup.object().shape({
  name: Yup.string().required("Обязательное поле"),
  surname: Yup.string().required("Обязательное поле"),
  rating: Yup.number().required("Обязательное поли"),
  email: Yup.string().email("Неправильный email").required("Обязательное поле"),
});

interface IValues {
  name: string;
  surname: string;
  form: string;
  rating: number;
  email: string;
}

function EditModal({
  showModal,
  student,
}: {
  showModal: React.Dispatch<React.SetStateAction<any>>;
  student: IStudentId;
}) {
  const dispatch = useAppDispatch();
  const { surname, name, rating, form, id, email } = student;
  const [formIndex, setFormIndex] = useState<number>(0);

  useEffect(() => {
    setFormIndex(defaultOptions.findIndex((o) => o.value === form));
  }, [form]);

  return (
    <ModalContainer>
      <ModalBody>
        <Formik
          initialValues={{
            name,
            surname,
            form,
            rating,
            email,
          }}
          validationSchema={editStudentSchema}
          enableReinitialize
          onSubmit={async (
            values: IValues,
            { resetForm }: FormikHelpers<IValues>,
          ) => {
            dispatch(editStudent({ ...values, id }));
            showModal({ student: {}, shown: false });
            resetForm();
          }}
        >
          {({ setFieldValue, errors, touched, isSubmitting }) => (
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
                Email:
                <Field
                  type="email"
                  name="email"
                  placeholder="ivanov@mail.com"
                  style={{
                    border: `2px solid${
                      errors.email && touched.email ? "#a10035" : "#451b0b"
                    }`,
                  }}
                />
                {errors.email && touched.email ? (
                  <ErrorMarkup>{errors.email}</ErrorMarkup>
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
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <ButtonLoader /> : "Изменить"}
              </Button>
              <CloseIcon
                onClick={() => showModal({ student: {}, shown: false })}
              />
            </StyledForm>
          )}
        </Formik>
      </ModalBody>
    </ModalContainer>
  );
}

export default EditModal;
