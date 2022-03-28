import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Col, Form, Spinner } from "react-bootstrap";
import { ILoginForm } from "../../services/types";
import { Creators as AuthCreators } from "../../store/ducks/auth";
import { Creators as UserCreators, IUser } from "../../store/ducks/user";
import validationSchema from "./validations";
import logo from "../../assets/images/logoWhite.png";
import api from "../../services/api";

import * as S from "./styles";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    (form: ILoginForm, resetForm) => {
      if (form.email !== "" && form.password !== "") {
        setLoading(true);
        api
          .post("/auth/sign-in", {
            ...form,
          })
          .then((response) => {
            const user: IUser = response.data;
            const token = response.headers.authorization;

            dispatch(AuthCreators.setAuthenticate({ token }));
            dispatch(UserCreators.setUser({ user }));

            navigate("/home");

            setLoading(false);
            resetForm({});
          })
          .catch((error) => {
            toast.error(error.response.data.errors.message);
            setLoading(false);
          });
      }
    },
    [dispatch, navigate]
  );

  const formik = useFormik<ILoginForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });
  const { values, setFieldValue, setFieldTouched, errors, touched, resetForm } =
    formik;

  return (
    <S.Container>
      <Col xl="12" lg="12" md="12" xs="12" sm="12">
        <S.FormContainer
          onSubmit={(event: React.FormEvent) => {
            event.preventDefault();
            onSubmit(values, resetForm);
          }}
        >
          <S.ContentLogo>
            <S.Logo src={logo} alt="" />
            <S.Title>Books</S.Title>
          </S.ContentLogo>
          <S.ContentForm>
            <S.ContentInput>
              <S.Label className="label-input">Login</S.Label>
              <S.Input
                placeholder="E-mail"
                value={values.email || ""}
                onBlur={() => setFieldTouched("email")}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("email", event.target.value)
                }
                isInvalid={touched.email && Boolean(errors && errors.email)}
              />
            </S.ContentInput>
          </S.ContentForm>
          {touched.email && errors && errors.email && (
            <Form.Text className="text-error">{`${errors.email}`}</Form.Text>
          )}
          <S.ContentForm>
            <S.ContentInput>
              <S.Label>Senha</S.Label>
              <S.Input
                placeholder="Senha"
                type="password"
                value={values.password || ""}
                onBlur={() => setFieldTouched("password")}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("password", event.target.value)
                }
                isInvalid={
                  touched.password && Boolean(errors && errors.password)
                }
              />
            </S.ContentInput>
            <S.Button type="submit">
              {!loading ? (
                <>Entrar</>
              ) : (
                <Spinner
                  as="span"
                  animation="border"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </S.Button>
          </S.ContentForm>
          {touched.password && errors && errors.password && (
            <Form.Text className="text-error">{`${errors.password}`}</Form.Text>
          )}
        </S.FormContainer>
      </Col>
    </S.Container>
  );
};

export default Login;
