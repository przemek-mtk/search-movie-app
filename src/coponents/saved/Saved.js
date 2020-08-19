import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import SavedList from "./SavedList"

const Saved = (props) => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <NavLink to={`${url}/movie`} activeClassName="saved-menu--active">movies</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/tv`} activeClassName="saved-menu--active">TV series</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/actor`} activeClassName="saved-menu--active">actors</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:type`} component={SavedList} />
        <Route exact path="*" >
          No match !!!!!
        </Route>
      </Switch>
    </div>
  );
};

export default Saved;
