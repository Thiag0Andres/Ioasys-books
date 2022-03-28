import styled from "styled-components";
import { Form } from "react-bootstrap";

import background from "../../assets/images/backgroundLogin.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url("${background}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

export const Logo = styled.img`
  width: 105px;
  height: 36px;
`;

export const Title = styled.h1`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 17px;
`;

export const FormContainer = styled(Form)`
  width: 368px;
  height: 224px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 115px;
  transform: translate(0%, -50%);

  @media screen and (max-width: 618px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ContentForm = styled(Form.Group)`
  width: 368px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.32);
  padding: 8px 12px 8px 16px;
  margin-bottom: 16px;
`;

export const Label = styled(Form.Label)`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  margin-bottom: 4px;

  color: ${({ theme }) => theme.colors.white};
`;

export const Input = styled(Form.Control)`
  width: 100%;
  height: 24px;

  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  background: transparent;
  border: 0;
  padding: 0;

  &:focus {
    background: transparent;
    box-shadow: none;
    border: none;
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    background: transparent;
    box-shadow: none;
    border: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ContentInput = styled.div``;

export const Button = styled.button`
  width: 85px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 44px;
  border: none;
  box-shadow: none;
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.dark_pink};
`;
