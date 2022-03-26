import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContainerBooks = styled.ul`
  width: 100%;
  max-width: 1136px;
  height: 100%;
  max-height: 512px;
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
