import React, { useState } from "react";
import GloabalStyle from "./coponents/styles/GlobalStyle";
import { BrowserRouter, Switch, Router } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./helpers/theme";
import Navbar from "./coponents/Navbar";
import Search from "./coponents/Search";


function App() {
  const [nightmode, setNightmode] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider theme={nightmode ? themeDark : themeLight}>
        <>
          <Navbar />
          <GloabalStyle />
          
          <Search />



        </>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
