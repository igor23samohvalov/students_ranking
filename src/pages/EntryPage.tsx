import { Field, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledForm } from "../components/styles/AddModal.styled";
import Button from "../components/styles/Button.styled";
import useAuth from "../hooks/useAuth";

interface Values {
  username: string;
  password: string;
  picked: string;
}

const StyledLink = styled(Link)`
  color: #f94892;
  &:hover {
    color: #fbdf07;
  }
`;

function EntryPage() {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        picked: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setSubmitting(false);
        console.log(values);
        logIn();
        navigate("/main");
      }}
    >
      <StyledForm>
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
        <Button type="submit">Войти</Button>
        <StyledLink to="/signup">Не зарегистрированы?</StyledLink>
      </StyledForm>
    </Formik>
  );
}

export default EntryPage;
