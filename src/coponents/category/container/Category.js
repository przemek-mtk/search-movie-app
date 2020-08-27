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
import NotFound from "../../NotFound";
import ErrorPage from "../../ErrorPage";
import Spinner from "../../Spinner";
import { ThemeContext } from "styled-components";
import StyledBoxSpinner from "../../styles/StyledBoxSpinner";

const CategoryContent = (props) => {
  const config = useContext(ConfigContext);
  const category = useContext(CategoryContext);
  const theme = useContext(ThemeContext);

  console.log("Category", category);

  if (config.isError || category.isError) {
    return <ErrorPage />;
  }

  return config.isLoading ||
    category.isLoading ||
    !config.config ||
    !category.data ? (
    <StyledBoxSpinner>
      <Spinner
        side={80}
        color={theme.primarySpinner}
        bg={theme.surfaceSpinner}
      />
    </StyledBoxSpinner>
  ) : (
    <div>
      <Switch>
        <Route path="/movie/:id" component={Movie} />
        <Route path="/tv/:id" component={Tv} />
        <Route path="/person/:id" component={Person} />
        <Route path="*" component={NotFound} />
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
