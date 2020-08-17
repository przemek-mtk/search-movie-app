import React from "react";
import { Link } from "react-router-dom";
import {
  faMoon, //do przeniesienia
  faBookmark, //do przeniesienia
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledUserOptions from "./styles/StyledUserOptions";

const UserOptions = () => {
  return (
    <StyledUserOptions>
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

export default UserOptions;
