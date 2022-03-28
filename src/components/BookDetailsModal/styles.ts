import styled from "styled-components";

interface SubtitleProps {
  isMargin?: boolean;
}

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  overflow: hidden;
  padding: 48px;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 24px;
  }
`;

export const Image = styled.img`
  width: 349px;
  height: 475px;
  margin-right: 48px;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

  @media screen and (max-width: 991px) {
    width: 240px;
    height: 351px;
    margin-right: 0;
    margin-bottom: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const TitleModal = styled.h1`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark_grey};
`;

export const AuthorsModal = styled.p`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.pink};
`;

export const Contentinfo = styled.div`
  display: flex;
  align-items: certer;
  justify-content: space-between;
`;

export const SubTitleModal = styled.h2<SubtitleProps>`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  text-align: left;
  color: ${({ theme }) => theme.colors.dark_grey};
  ${({ isMargin }) => (isMargin ? "margin: 32px 0 10px 0 !important" : "")};
`;

export const DescriptionModal = styled.p`
  font-family: "Heebo";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.grey};
`;
