import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const NightmodeContext = createContext();

const NightmodeContextProvider = (props) => {
  const [nightmode, setNightmode] = useState(false);

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
