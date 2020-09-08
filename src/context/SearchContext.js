import React, { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { searchReducer } from "../reducer/searchReducer";
import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_SEARCH_API_KEY;

export const SearchContext = createContext();

const SearchContextProvider = ({children}) => {
  const [search, dispatch] = useReducer(searchReducer, {
    query: "",
    mediaType: "multi",
    isError: false,
    isLoading: false,
    searchData: [],
  });

  useEffect(() => {
    const { query, mediaType } = search;

    const fetchData = async () => {
      dispatch({ type: "LOAD_DATA" });
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/${mediaType}?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const data = response.data.results;
        dispatch({ type: "SUCCES_DATA", data });
      } catch (e) {
        dispatch({ type: "ERROR_DATA" });
      }
    };

    if (query.length !== 0) {
      fetchData();
    } else {
      dispatch({ type: "EMPTY_QUERY" });
    }

  }, [search.query]);

  return (
    <SearchContext.Provider value={{ ...search, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SearchContextProvider;


