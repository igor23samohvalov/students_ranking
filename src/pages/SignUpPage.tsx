import { createUserWithEmailAndPassword } from "firebase/auth";
import { Field, Formik, FormikHelpers } from "formik";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { ErrorMarkup, StyledForm } from "../components/styles/AddModal.styled";
import Button from "../components/styles/Button.styled";
import { ButtonLoader } from "../components/styles/Loader";
import { auth } from "../lib/firebase";
import { notify } from "../lib/utility";

const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Неправильный email").required("Обязательное поле"),
  password: Yup.string()
    .min(6, "Минимальная длина - 6 символов")
    .required("Обязательное поле"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Пароли должны совпадать",
  ),
});

interface Values {
  confirmPassword: string;
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
        confirmPassword: "",
        password: "",
        email: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={async (
        values: Values,
        { setSubmitting, setFieldError }: FormikHelpers<Values>,
      ) => {
        setSubmitting(true);
        try {
          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password,
          );
          navigate("/");
        } catch (error: any) {
          console.log(error.code);
          switch (error.code) {
            case "auth/email-already-in-use":
              setFieldError("email", "Email уже используется");
              break;
            case "auth/network-request-failed":
              notify("Нет подключения к сети", "warn");
              break;
            default:
              notify("", "");
              break;
          }
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <StyledForm inputwidth="1fr">
          <h2>Регистрация</h2>
          <label>
            Электронная почта:
            <Field
              type="email"
              name="email"
              placeholder="pochta@gmail.com"
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
          <label>
            Подтвердите пароль:
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Пароль"
              style={{
                border: `2px solid${
                  errors.confirmPassword && touched.confirmPassword
                    ? "#a10035"
                    : "#451b0b"
                }`,
              }}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <ErrorMarkup>{errors.confirmPassword}</ErrorMarkup>
            ) : null}
          </label>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <ButtonLoader /> : "Зарегистрироваться"}
          </Button>
          <StyledLink to="/">Уже зарегистированы? Войти</StyledLink>
        </StyledForm>
      )}
    </Formik>
  );
}

export default SignUpPage;
