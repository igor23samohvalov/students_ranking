import { createUserWithEmailAndPassword } from "firebase/auth";
import { Field, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledForm } from "../components/styles/AddModal.styled";
import Button from "../components/styles/Button.styled";
import Loader from "../components/styles/Loader";
import { auth } from "../lib/firebase";

interface Values {
  username: string;
  password: string;
  email: string;
}

const StyledLink = styled(Link)`
  color: #a10035;
  &:hover {
    color: #2a0944;
  }
`;

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
      }}
      onSubmit={async (
        values: Values,
        { setSubmitting }: FormikHelpers<Values>,
      ) => {
        setSubmitting(true);
        try {
          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password,
          );
          navigate("/");
        } catch (error) {
          alert(error);
        }
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <StyledForm inputwidth="1fr">
          <h2>Регистрация</h2>
          <label>
            Имя пользователя:
            <Field type="text" name="username" placeholder="Логин" />
          </label>
          <label>
            Электронная почта:
            <Field type="email" name="email" placeholder="pochta@gmail.com" />
          </label>
          <label>
            Пароль:
            <Field type="password" name="password" placeholder="Пароль" />
          </label>
          <Button type="submit">
            {formik.isSubmitting ? <Loader /> : "Зарегистрироваться"}
          </Button>
          <StyledLink to="/">Уже зарегистированы? Войти</StyledLink>
        </StyledForm>
      )}
    </Formik>
  );
}

export default SignUpPage;
