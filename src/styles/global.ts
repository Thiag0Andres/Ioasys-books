import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, Manrope;
  }

  button,
div[href] {
  cursor: pointer;
  text-transform: none !important;
}

html {
  height: 100%;
  scroll-behavior: smooth; // scroll suavizado
  overflow-x: hidden;
  overflow: inherit;
}

body {
  overflow-x: hidden;
  background-color: ${({ theme }: any) => theme.colors.white};
}

@media only screen and (min-width: 1000px) {
  .justify-content {
    max-width: 1000px;
    display: flex;
    justify-content: center;
    margin: auto;
  }
}

a {
  cursor: pointer !important;
}
`;
