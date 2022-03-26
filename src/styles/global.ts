import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Heebo', sans-serif !important;
  font-size: 1rem;
  top: 0px;
  left: 0px;
  overflow-x: hidden;

  max-width: 100%;
  background-color: white !important;
  background-position: bottom !important;
  background-repeat: no-repeat;
  background-attachment: fixed !important;
  opacity: 1;

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  @media (max-width: 425px) {
    html {
      font-size: 81.25%; // 13px
    }
  }

  @media (max-width: 320px) {
    html {
      font-size: 75%; // 12px
    }
  }

  a {
  cursor: pointer !important;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
  }
  
  p {
    margin: 0px !important;
  }

  ul {
    padding: 0px !important;
  }

  li {
    margin: 0px !important;
    padding: 0px !important;
  }
}
`;
