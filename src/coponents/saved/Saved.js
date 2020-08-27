import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import SavedList from "./SavedList"
import StyledSaved from "./styles/StyleSaved"
import ConfigContextProvider from "../../context/ConfigContext"

const Saved = (props) => {
  const { path, url } = useRouteMatch();


  return (
    <ConfigContextProvider>

    <StyledSaved>
      <ul>
        <li>
          <NavLink to={`${url}/movie`} activeClassName="saved-link--active">movies</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/tv`} activeClassName="saved-link--active">TV series</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/person`} activeClassName="saved-link--active">actors</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${path}/:type`} component={SavedList} />
        <Route exact path="*" >
          No match !!!!!
        </Route>
      </Switch>
    </StyledSaved>
    </ConfigContextProvider>
  );
};

export default Saved;
