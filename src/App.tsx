import React from "react";
import { Home, Login } from "./pages";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <ThemeProvider theme={theme}>
          <Home />
          <ToastContainer />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
