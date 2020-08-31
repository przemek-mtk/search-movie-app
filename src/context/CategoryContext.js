import React, { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { categoryReducer } from "../reducer/categoryReducer";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_SEARCH_API_KEY;

export const CategoryContext = createContext();

const CategoryContextProvider = ({ location, history, match, children }) => {
  const { category, id } = useParams();
  const [resources, dispatch] = useReducer(categoryReducer, null, () => {
    const savedData = JSON.parse(
      window.localStorage.getItem(`${category}-${id}`)
    );

    return {
      isLoading: false,
      isError: false,
      data: savedData ? savedData.data : null,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(`${category}-${id}`, JSON.stringify(resources));
  }, [resources, category, id]);

  useEffect(() => {
    const savedData = JSON.parse(
      window.localStorage.getItem(`${category}-${id}`)
    );

    if (savedData.data !== null) {
      dispatch({ type: "SUCCES_DATA", data: savedData.data });
    } else {
      const appendToResponse =
        category === "person"
          ? "combined_credits"
          : "videos%2Ccredits%2Creviews%2Cimages&include_image_language=en%2Cnull";

      const fetchData = async () => {
        try {
          dispatch({ type: "LOAD_DATA" });
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
  }, [history, match.params.category, match.params.id, history, category, id]);

  return (
    <CategoryContext.Provider value={{ ...resources, dispatch, match }}>
      {children}
    </CategoryContext.Provider>
  );
};

CategoryContextProvider.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default CategoryContextProvider;
