import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NightmodeContextProvider from "./context/NightmodeContext";
// import 'font-awesome/css/font-awesome.min.css';
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

ReactDOM.render(
  <React.StrictMode>
    <NightmodeContextProvider>
      <App />
    </NightmodeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
