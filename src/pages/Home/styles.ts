import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1136px;
  height: 124px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  color: #333333;
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
  color: #333333;
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
`;

export const ContainerBooks = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;
`;

export const ListItem = styled.li`
  width: 272px;
  height: 160px;
  list-style: none;
`;

export const ContainerSpinner = styled.div`
  width: 1136px;
  height: 512px;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-border {
    color: #c80e60;
  }
`;
