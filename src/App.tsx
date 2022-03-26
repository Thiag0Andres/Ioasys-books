import React from "react";
import { Login } from "./pages";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Login />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
