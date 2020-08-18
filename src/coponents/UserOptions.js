import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  faMoon, //do przeniesienia
  faBookmark, //do przeniesienia
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledUserOptions from "./styles/StyledUserOptions";
import { useOutsideClick } from "../hooks/useOutsideClick";

const UserOptions = ({ setOptionVisible }) => {
  const options = useRef(null);
  useOutsideClick(options, () => setOptionVisible(false));

  return (
    <StyledUserOptions ref={options}>
      <button className="options__element">
        <FontAwesomeIcon icon={faMoon} />
        <span>nightmode</span>
        <label>
          <input type="checkbox" name="nightmode" />
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
