import { Formik, FormikHelpers, Field } from "formik";
import { fsMethods } from "../lib/firebase";
import {
  ModalContainer,
  StyledForm,
  ModalBody,
} from "./styles/AddModal.styled";
import Button from "./styles/Button.styled";
import CloseIcon from "./styles/CloseIcon";
import Loader from "./styles/Loader";

interface IValues {
  name: string;
  surname: string;
  form: string;
  rating: number;
}

function AddModal({
  isShownAddModal,
  setAddModal,
  addStudent,
}: {
  isShownAddModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  addStudent: React.Dispatch<React.SetStateAction<any>>;
}) {
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
          }}
          onSubmit={async (
            values: IValues,
            { setSubmitting, resetForm }: FormikHelpers<IValues>,
          ) => {
            setSubmitting(true);
            try {
              fsMethods.addStudent({ ...values, history: [], ranking: 0 });
              fsMethods.loadStudents(addStudent);
              setAddModal(false);
              resetForm();
            } catch (error) {
              alert(error);
            }
            setSubmitting(false);
          }}
        >
          {(formik) => (
            <StyledForm>
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
                <Field type="text" name="form" placeholder="10А" />
              </label>
              <label>
                Рейтинг:
                <Field type="number" name="rating" placeholder="50" />
              </label>
              <Button type="submit">
                {formik.isSubmitting ? <Loader /> : "Добавить"}
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
