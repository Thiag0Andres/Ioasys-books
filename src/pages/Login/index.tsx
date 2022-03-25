import React, { useState, useEffect, useCallback } from "react";

//import { useDispatch } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";

import { toast } from "react-toastify";

import { Button } from "@material-ui/core";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";

import { ILoginForm } from "../../services/types";
import validationSchema from "./validations";

import OrganizeLogo from "../../images/organize_logo.svg";
import api from "../../services/api";

import * as S from "./styles";

const { REACT_APP_LOCAL_STORAGE_USER_AUTH, REACT_APP_LOCAL_STORAGE_USER_ID } =
  process.env;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback((form: ILoginForm, resetForm) => {
    if (form.email !== "" && form.password !== "") {
      setLoading(true);
      api
        .post("/auth/sign-in", {
          ...form,
        })
        .then((response) => {
          const data = response.data;

          /*             localStorage.setItem(
              String(REACT_APP_LOCAL_STORAGE_USER_AUTH),
              token
            );
            localStorage.setItem(
              String(REACT_APP_LOCAL_STORAGE_USER_ID),
              user.id
            ); */
          setLoading(false);
          resetForm({});
        })
        .catch((error) => {
          // console.log(error.response);
          setLoading(false);
        });
    }
  }, []);

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

  // Limpando token
  useEffect(() => {
    localStorage.removeItem(String(REACT_APP_LOCAL_STORAGE_USER_AUTH));
    localStorage.removeItem(String(REACT_APP_LOCAL_STORAGE_USER_ID));
  }, []);

  const formSignIn = (
    <S.FormContainer
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(values, resetForm);
      }}
    >
      <S.ContentForm>
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
        {touched.email && errors && errors.email && (
          <Form.Text className="text-error">{`${errors.email}`}</Form.Text>
        )}
      </S.ContentForm>
      <S.ContentForm>
        <S.Label>Senha</S.Label>
        <S.Input
          placeholder="Senha"
          type="password"
          value={values.password || ""}
          onBlur={() => setFieldTouched("password")}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("password", event.target.value)
          }
          isInvalid={touched.password && Boolean(errors && errors.password)}
        />
        {touched.password && errors && errors.password && (
          <Form.Text className="text-error">{`${errors.password}`}</Form.Text>
        )}
      </S.ContentForm>

      <Button type="submit" className="primary-button">
        {!loading ? (
          Login
        ) : (
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
          />
        )}
      </Button>
    </S.FormContainer>
  );

  return (
    <Container fluid className="container-login">
      <Row>
        <Col className="container-form" xl="12" lg="12" md="12" xs="12" sm="12">
          {formSignIn}
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
