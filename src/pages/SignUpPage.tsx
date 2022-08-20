import { Field, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledForm } from "../components/styles/AddModal.styled";
import Button from "../components/styles/Button.styled";
import useAuth from "../hooks/useAuth";

interface Values {
  username: string;
  password: string;
  email: string;
}

const StyledLink = styled(Link)`
  color: #f94892;
  &:hover {
    color: #fbdf07;
  }
`;

function SignUpPage() {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setSubmitting(false);
        console.log(values);
        logIn();
        navigate("/main");
      }}
    >
      <StyledForm>
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
        <Button type="submit">Зарегистрироваться</Button>
        <StyledLink to="/">Уже зарегистированы? Войти</StyledLink>
      </StyledForm>
    </Formik>
  );
}

export default SignUpPage;
