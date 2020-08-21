import React from "react";
import { Switch, Route } from "react-router-dom";
import Movie from "./Movie";
import Tv from "./Tv";
import Person from "./Person";
// import CategoryContextProvider from "../../context/CategoryContext"


const Category = (props) => {
  return (
    // <CategoryContextProvider>

    <div>
      <Switch>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/tv/:id" component={Tv} />
        <Route path="/person/:id" component={Person} />
        <Route path="*">Not Found !!!</Route>
      </Switch>
    </div> 
    // </CategoryContextProvider>
  )
};

export default Category;
