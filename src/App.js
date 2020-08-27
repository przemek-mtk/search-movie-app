import React, { useContext } from "react";
import GloabalStyle from "./coponents/styles/GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./helpers/theme";
import Navbar from "./coponents/navbar/Navbar";
import Search from "./coponents/search/Search";
import Saved from "./coponents/saved/Saved";
import SearchContextProvider from "./context/SearchContext";
import { NightmodeContext } from "./context/NightmodeContext";
import Category from "./coponents/category/container/Category";
import NotFound from "./coponents/NotFound";

function App() {
  const { nightmode } = useContext(NightmodeContext);

  return (
    <BrowserRouter>
      <ThemeProvider theme={nightmode ? themeDark : themeLight}>
        <SearchContextProvider>
          <>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/saved" component={Saved} />
              <Route path="/:category/:id" component={Category} />
              <Route path="*" component={NotFound} />
            </Switch>

            <GloabalStyle />
          </>
        </SearchContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
