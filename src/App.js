import React, { useState, useContext } from "react";
import GloabalStyle from "./coponents/styles/GlobalStyle";
import { BrowserRouter, Switch, Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./helpers/theme";
import Navbar from "./coponents/Navbar";
import Search from "./coponents/Search";
import SearchContextProvider from "./context/SearchContext";
import { NightmodeContext } from "./context/NightmodeContext";

function App() {
  const { nightmode } = useContext(NightmodeContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={nightmode ? themeDark : themeLight}>
        <SearchContextProvider>
          <>
            <Navbar />

            <GloabalStyle />

            <Search />
          </>
        </SearchContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
