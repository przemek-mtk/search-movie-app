import React, { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { configReducer } from "../reducer/configReducer";
import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_SEARCH_API_KEY;

export const ConfigContext = createContext();

const ConfigContextProvider = ({ children }) => {
  const [config, dispatch] = useReducer(configReducer, null, () => {
    const savedData = window.localStorage.getItem("img-config");
    return savedData
      ? { isLoading: false, isError: false, config: JSON.parse(savedData) }
      : { isLoading: false, isError: false, config: null };
  });

  useEffect(() => {
    if (config.config === null) {
      const fetchData = async () => {
        dispatch({ type: "LOAD_DATA" });
        try {
          const response = await axios.get(
            ` https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
          );
          const data = response.data.images;
          const jsonData = JSON.stringify(data);

          window.localStorage.setItem("img-config", jsonData);
          dispatch({ type: "SUCCES_DATA", data });
        } catch (e) {
          dispatch({ type: "ERROR_DATA" });
        }
      };

      fetchData();
    }
  }, []);

  return (
    <ConfigContext.Provider value={{ ...config }}>
      {children}
    </ConfigContext.Provider>
  );
};

ConfigContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ConfigContextProvider;
