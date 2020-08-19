import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  faMoon, //do przeniesienia
  faBookmark, //do przeniesienia
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledUserOptions from "./styles/StyledUserOptions";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { NightmodeContext } from "../../context/NightmodeContext";

const UserOptions = ({ setOptionVisible }) => {
  const options = useRef(null);
  useOutsideClick(options, () => setOptionVisible(false));

  const { nightmode, changeTheme } = useContext(NightmodeContext);

  return (
    <StyledUserOptions ref={options}>
      <button className="options__element" onClick={changeTheme}>
        <FontAwesomeIcon icon={faMoon} />
        <span>nightmode</span>
        <label>
          <input type="checkbox" name="nightmode" onChange={changeTheme} checked={nightmode} />
          <span className="switch"></span>
        </label>
      </button>

      <Link to="/saved" className="options__element">
        <FontAwesomeIcon icon={faBookmark} />
        <span>saved</span>
      </Link>
    </StyledUserOptions>
  );
};

UserOptions.propTypes = {
  setOptionVisible: PropTypes.func.isRequired,
};

export default UserOptions;
