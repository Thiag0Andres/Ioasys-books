import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Routes />
          <ToastContainer />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
