import React, { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { categoryReducer } from "../reducer/categoryReducer";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_SEARCH_API_KEY;

export const CategoryContext = createContext();

const CategoryContextProvider = ({ location, history, match, children }) => {
  const { category, id } = useParams();
  const [data, dispatch] = useReducer(categoryReducer, null, () => {
    const localSorage = window.localStorage.getItem(`${category}-${id}`);
    return localSorage ? JSON.parse(localSorage) : null;
  });

  useEffect(() => {
    if (data === null) {
      const appendToResponse =
        category === "person"
          ? "combined_credits"
          : "videos%2Ccredits%2Creviews";

      const fetchData = async () => {
        dispatch({ type: "LOAD_DATA" });
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/${category}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=${appendToResponse}`
          );
          const data = response.data;
          dispatch({ type: "SUCCES_DATA", data });
        } catch (e) {
          //jakiś tam error
          dispatch({ type: "ERROR_DATA" });
        }
      };

      fetchData();
    }
  }, [location.pathname, match.params]);

  return (
    <CategoryContext.Provider value={{...data}}>{children}</CategoryContext.Provider>
  );
};

CategoryContextProvider.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default CategoryContextProvider;
