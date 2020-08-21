import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NightmodeContextProvider from "./context/NightmodeContext";
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <React.StrictMode>
    <NightmodeContextProvider>
      <App />
    </NightmodeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
