import React from "react";
import { Home, Login } from "./pages";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Login />
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
