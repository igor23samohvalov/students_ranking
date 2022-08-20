import { Formik, FormikHelpers, Field } from "formik";
import { RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import {
  ModalContainer,
  StyledForm,
  ModalBody,
} from "./styles/AddModal.styled";
import Button from "./styles/Button.styled";

interface Values {
  name: string;
  surname: string;
  form: string;
  rating: number;
}

const StyledIcon = styled(RiCloseLine).attrs({
  size: "1.7em",
})`
  position: absolute;
  top: -2rem;
  right: -2rem;
  color: #451b0b;
  cursor: pointer;
`;

function AddModal({
  isShown,
  setAddModal,
}: {
  isShown: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = () => {
    setAddModal(false);
  };

  return (
    <ModalContainer display={Number(isShown)}>
      <ModalBody>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            form: "",
            rating: 0,
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>,
          ) => {
            setSubmitting(false);
            console.log(values);
            setAddModal(false);
          }}
        >
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
            <Button type="submit">Добавить</Button>
            <StyledIcon onClick={handleClick} />
          </StyledForm>
        </Formik>
      </ModalBody>
    </ModalContainer>
  );
}

export default AddModal;
