import { Formik, FormikHelpers, Field } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../hooks/reduxHooks";
import { editEntry } from "../store/entriesSlice";
import { IEntryId } from "../Types/IEntry";
import {
  ModalContainer,
  StyledForm,
  ModalBody,
  ErrorMarkup,
} from "./styles/AddModal.styled";
import Button from "./styles/Button.styled";
import CloseIcon from "./styles/CloseIcon";
import { ButtonLoader } from "./styles/Loader";

const editEntrySchema = Yup.object().shape({
  // value: Yup.number().required("Обязательное поле"),
  comment: Yup.string().required("Обязательное поле"),
});

interface IValues {
  // value: number;
  comment: string;
}
type AddModalProps = {
  isShown: boolean;
  showModal: React.Dispatch<React.SetStateAction<any>>;
  entry: IEntryId;
};

function EditEntryModal({ isShown, showModal, entry }: AddModalProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    showModal(false);
  };

  return (
    <ModalContainer display={Number(isShown)}>
      <ModalBody>
        <Formik
          initialValues={{
            // value: entry.value,
            comment: entry.comment,
          }}
          enableReinitialize
          validationSchema={editEntrySchema}
          onSubmit={async (
            values: IValues,
            { resetForm }: FormikHelpers<IValues>,
          ) => {
            dispatch(editEntry({ ...entry, comment: values.comment }));
            showModal({ entry: {}, shown: false });
            resetForm();
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <StyledForm inputwidth="0.2fr">
              {/* <label>
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
              </label> */}
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
                {isSubmitting ? <ButtonLoader /> : "Изменить"}
              </Button>
              <CloseIcon onClick={handleClick} />
            </StyledForm>
          )}
        </Formik>
      </ModalBody>
    </ModalContainer>
  );
}

export default EditEntryModal;
