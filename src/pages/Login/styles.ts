import styled from "styled-components";
import { Form } from "react-bootstrap";

export const Container = styled.div``;

export const FormContainer = styled(Form)``;

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
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  padding: 0.75rem;
  &:focus {
    box-shadow: none;
  }
`;
