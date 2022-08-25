import { signInWithEmailAndPassword } from "firebase/auth";
import { Field, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledForm } from "../components/styles/AddModal.styled";
import Button from "../components/styles/Button.styled";
import Loader from "../components/styles/Loader";
import useAuth from "../hooks/useAuth";
import { auth } from "../lib/firebase";
import ButtonBlock from "../components/styles/EntryPage.styled";

interface Values {
  username: string;
  password: string;
  picked: string;
}

const StyledLink = styled(Link)`
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
        picked: "",
      }}
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
      {(formik) => (
        <StyledForm inputwidth="1fr">
          <h2>Авторизация</h2>
          <label>
            Имя пользователя:
            <Field type="text" name="username" placeholder="Логин" />
          </label>
          <label>
            Пароль:
            <Field type="password" name="password" placeholder="Пароль" />
          </label>
          <div>
            <label>
              <Field type="radio" name="role" value="Учитель" />
              Учитель
            </label>
            <label>
              <Field type="radio" name="role" value="Студент" />
              Студент
            </label>
          </div>
          <div>
            <ButtonBlock>
              <Button type="button" onClick={() => logIn("guest")}>
                Зайти как гость
              </Button>
              <Button type="submit">
                {formik.isSubmitting ? <Loader /> : "Войти"}
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
