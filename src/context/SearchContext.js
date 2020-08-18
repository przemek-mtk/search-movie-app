import React, { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { searchReducer } from "../reducer/searchReducer";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [search, dispatch] = useReducer(searchReducer, {query: "", mediaType: "multi", isError: false, isLoading: false, searchData: null });
  // const [query, setQuery] = useState("");
  // const [mediaType, setMediaType] = useState("all");

  // const [searchData, setSearchData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // const changeQuery = (e) => {
  //   setQuery(e.target.value);
  // };

  // const changeMediaType = (e) => {
  //   setMediaType(e.target.value);
  // };

  useEffect(() => {
    // setIsLoading(true);
    dispatch({ type: "LOAD_DATA" });
    // setIsError(false);

    //wysyła zapytanie o tutaj

    // odbiór zapytania
    try {
      //poprawny odbiór zapytania
      // setSearchData("dane z zapytania");
      dispatch({ type: "SUCCES_DATA", data: "odpowiedź z zapytania" });
    } catch (e) {
      // setIsError(true);
      dispatch({ type: "ERROR_DATA" });
    }

    // setIsLoading(false);
  }, [search.query]);

  return (
    <SearchContext.Provider value={{ ...search, dispatch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default SearchContextProvider;
