import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BackgroundImage = styled.img`
  flex: 1;
  object-fit: cover;
`;

export const FormContainer = styled(Form)`
  width: 368px;
  height: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: red;
  position: absolute;
  top: 50%;
`;

export const ContentForm = styled(Form.Group)``;

export const Label = styled(Form.Label)`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const Input = styled(Form.Control)`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  border: 0;
  padding: 0.75rem;
  &:focus {
    box-shadow: none;
  }
`;
