import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Movie from "./Movie";
import Tv from "./Tv";
import Person from "./Person";
import CategoryContextProvider, {
  CategoryContext,
} from "../../../context/CategoryContext";
import ConfigContextProvider, {
  ConfigContext,
} from "../../../context/ConfigContext";



const CategoryContent = (props) => {
  const config = useContext(ConfigContext);
  const category = useContext(CategoryContext);

  console.log("Category", category);

  return config.isLoading || category.isLoading || !config.config  || !category.data ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Switch>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/tv/:id" component={Tv} />
        <Route path="/person/:id" component={Person} />
        <Route path="*">Not Found !!!</Route>
      </Switch>
    </div>
  );
};



const Category = (props) => {
  return (
    <ConfigContextProvider>
      <CategoryContextProvider {...props}>
        <CategoryContent />
      </CategoryContextProvider>
    </ConfigContextProvider>
  );
};

export default Category;



