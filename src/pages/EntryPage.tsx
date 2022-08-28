import { signInWithEmailAndPassword } from "firebase/auth";
import { Field, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { ErrorMarkup, StyledForm } from "../components/styles/AddModal.styled";
import Button from "../components/styles/Button.styled";
import Loader from "../components/styles/Loader";
import useAuth from "../hooks/useAuth";
import { auth } from "../lib/firebase";
import ButtonBlock from "../components/styles/EntryPage.styled";

const logInSchema = Yup.object().shape({
  username: Yup.string()
    .email("Неправильный email")
    .required("Обязательное поле"),
  password: Yup.string().required("Обязательное поле"),
});

interface Values {
  username: string;
  password: string;
  // picked: string;
}

const StyledLink = styled(Link)`
  margin-top: 2rem;
  color: #a10035;
  &:hover {
    color: #2a0944;
  }
`;

function EntryPage() {
  const { logIn } = useAuth();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={logInSchema}
      onSubmit={async (
        values: Values,
        { setSubmitting }: FormikHelpers<Values>,
      ) => {
        setSubmitting(true);
        try {
          await signInWithEmailAndPassword(
            auth,
            values.username,
            values.password,
          );
          logIn(values.username);
        } catch (error) {
          alert(error);
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <StyledForm inputwidth="1fr">
          <h2>Авторизация</h2>
          <label>
            Имя пользователя:
            <Field
              type="text"
              name="username"
              placeholder="Логин"
              style={{
                border: `2px solid${
                  errors.username && touched.username ? "#a10035" : "#451b0b"
                }`,
              }}
            />
            {errors.username && touched.username ? (
              <ErrorMarkup>{errors.username}</ErrorMarkup>
            ) : null}
          </label>
          <label>
            Пароль:
            <Field
              type="password"
              name="password"
              placeholder="Пароль"
              style={{
                border: `2px solid${
                  errors.password && touched.password ? "#a10035" : "#451b0b"
                }`,
              }}
            />
            {errors.password && touched.password ? (
              <ErrorMarkup>{errors.password}</ErrorMarkup>
            ) : null}
          </label>
          {/* <div>
            <label>
              <Field type="radio" name="role" value="Учитель" />
              Учитель
            </label>
            <label>
              <Field type="radio" name="role" value="Студент" />
              Студент
            </label>
          </div> */}
          <div>
            <ButtonBlock>
              <Button type="button" onClick={() => logIn("guest")}>
                Зайти как гость
              </Button>
              <Button type="submit">
                {isSubmitting ? <Loader /> : "Войти"}
              </Button>
            </ButtonBlock>
          </div>
          <StyledLink to="/signup">Не зарегистрированы?</StyledLink>
        </StyledForm>
      )}
    </Formik>
  );
}

export default EntryPage;
