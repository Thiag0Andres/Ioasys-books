import styled from "styled-components";

export const Container = styled.button`
  width: 272px;
  height: 160px;
  background-color: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  border: none;
  padding: 19px 16px;
  display: flex;
`;

export const Image = styled.img`
  width: 81px;
  height: 122px;
  margin-right: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TitleCard = styled.h1`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  color: #333333;
`;

export const AuthorsCard = styled.p`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  color: #ab2680;
`;

export const DescriptionCard = styled.p`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  color: #999999;
`;
