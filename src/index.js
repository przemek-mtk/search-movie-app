import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NightmodeContextProvider from "./context/NightmodeContext";

ReactDOM.render(
  <React.StrictMode>
    <NightmodeContextProvider>
      <App />
    </NightmodeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
