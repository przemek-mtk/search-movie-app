import React, { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { categoryReducer } from "../reducer/categoryReducer";
import { useParams } from "react-router-dom";

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
  const { category, id } = useParams();

  const [data, dispatch] = useReducer(categoryReducer, null, () => {
    const localSorage = window.localStorage.getItem(`${category}-${id}`);
    return localSorage ? JSON.parse(localSorage) : null;
  });

  useEffect(() => {

    if(data === null) {
      //zapytanie wysyłamy do API
    }


  }, [data]);//za każdym razem jak zminei się url!!! a nie data

  return (
    <CategoryContext.Provider value={"s"}>
      {props.children}
    </CategoryContext.Provider>
  );
};

CategoryContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CategoryContextProvider;
