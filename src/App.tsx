import React from "react";
import { Home, Login } from "./pages";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Home />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
