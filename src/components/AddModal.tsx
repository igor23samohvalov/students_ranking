import { Formik, FormikHelpers, Field } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addStudent } from "../store/studentsSlice";
import {
  ModalContainer,
  StyledForm,
  ModalBody,
  ErrorMarkup,
} from "./styles/AddModal.styled";
import Button from "./styles/Button.styled";
import CloseIcon from "./styles/CloseIcon";
import { ButtonLoader } from "./styles/Loader";
import { defaultOptions, StyledSelect } from "./styles/StyledSelect";

const addStudentSchema = Yup.object().shape({
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
type AddModalProps = {
  isShownAddModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddModal({ isShownAddModal, setAddModal }: AddModalProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    setAddModal(false);
  };

  return (
    <ModalContainer display={Number(isShownAddModal)}>
      <ModalBody>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            form: "",
            rating: 0,
            email: "",
          }}
          validationSchema={addStudentSchema}
          onSubmit={async (
            values: IValues,
            { resetForm }: FormikHelpers<IValues>,
          ) => {
            if (!values.form) values.form = "10А";
            dispatch(addStudent({ ...values, history: [], ranking: 0 }));
            setAddModal(false);
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
                  placeholder="10А"
                  options={defaultOptions}
                  defaultValue={defaultOptions[0]}
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

export default AddModal;
