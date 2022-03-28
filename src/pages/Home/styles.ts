import styled from "styled-components";

import background from "../../assets/images/backgroundHome.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url("${background}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1136px;
  height: 124px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1161px) {
    max-width: 848px;
  }
  @media screen and (max-width: 900px) {
    max-width: 592px;
  }
  @media screen and (max-width: 618px) {
    max-width: 288px;
  }
`;

export const ContentLogo = styled.div`
  display: flex;
  align-items: center;
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
  color: ${({ theme }) => theme.colors.dark_grey};
  margin-left: 17px;
`;

export const ContentInfoUser = styled.div`
  display: flex;
  align-items: center;
`;

export const WelcomeText = styled.p`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark_grey};
`;

export const ButtonLogout = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  box-shadow: none;
`;

export const LogoutIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 16px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1136px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1161px) {
    max-width: 848px;
  }
  @media screen and (max-width: 900px) {
    max-width: 592px;
  }
  @media screen and (max-width: 618px) {
    max-width: 288px;
  }
`;

export const ContainerBooks = styled.ul`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;

  @media screen and (max-width: 1161px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 618px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const ListItem = styled.li`
  width: 272px;
  height: 160px;
  list-style: none;

  @media screen and (max-width: 900px) {
    width: 288px;
  }
`;

export const ContainerSpinner = styled.div`
  width: 1136px;
  height: 512px;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-border {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
