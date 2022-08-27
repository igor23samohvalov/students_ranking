import { Formik, FormikHelpers, Field } from "formik";
import { useAppDispatch } from "../hooks/reduxHooks";
import { addStudent } from "../store/studentsSlice";
import {
  ModalContainer,
  StyledForm,
  ModalBody,
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
          }}
          onSubmit={async (
            values: IValues,
            { resetForm }: FormikHelpers<IValues>,
          ) => {
            dispatch(addStudent({ ...values, history: [], ranking: 0 }));
            setAddModal(false);
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
              <Button type="submit">Добавить</Button>
              <CloseIcon onClick={handleClick} />
            </StyledForm>
          )}
        </Formik>
      </ModalBody>
    </ModalContainer>
  );
}

export default AddModal;
