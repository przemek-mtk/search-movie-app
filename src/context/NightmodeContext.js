import React, { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const NightmodeContext = createContext();

const NightmodeContextProvider = (props) => {
  const [nightmode, setNightmode] = useState(() => {
    const localData = window.localStorage.getItem("nightmode");
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    window.localStorage.setItem("nightmode", nightmode);
  }, [nightmode]);

  const changeTheme = () => {
    setNightmode((prev) => !prev);
  };

  return (
    <NightmodeContext.Provider value={{ nightmode, changeTheme }}>
      {props.children}
    </NightmodeContext.Provider>
  );
};

NightmodeContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NightmodeContextProvider;
