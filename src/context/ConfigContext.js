import React, { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { configReducer } from "../reducer/configReducer";
import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_SEARCH_API_KEY;

export const ConfigContext = createContext();

const ConfigContextProvider = (props) => {
  const [config, dispatch] = useReducer(configReducer, null, () => {
    const localStorage = window.localStorage.getItem("img-config");
    return localStorage ? JSON.parse(localStorage) : null;
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOAD_DATA" });
      try {
        const response = await axios.get(
          ` https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
        );
        const data = response.data.images;
        dispatch({ type: "SUCCES_DATA", data });
      } catch (e) {
        dispatch({ type: "ERROR_DATA" });
      }
    };

    if (config === null) {
      fetchData();
    }
  }, []);

  return (
    <ConfigContext.Provider value={{ ...config }}>
      {props.children}
    </ConfigContext.Provider>
  );
};

ConfigContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ConfigContextProvider;
