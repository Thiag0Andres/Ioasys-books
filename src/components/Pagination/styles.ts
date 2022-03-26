import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 88px;
`;

export const TextPage = styled.p`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  color: #333333;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  box-shadow: none;
`;

export const EmptySpace = styled.div`
  width: 8px;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;
