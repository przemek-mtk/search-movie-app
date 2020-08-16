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
      <div className="options__element">
        <FontAwesomeIcon icon={faMoon} />
        <span>nightmode</span>
        <label>
          <input type="checkbox" name="nightmode" />
          <span className="switch"></span>
        </label>
      </div>

      <div className="options__element">
        <Link to="/saved">
          <FontAwesomeIcon icon={faBookmark} />
          <span>saved</span>
        </Link>
      </div>
    </StyledUserOptions>
  );
};

export default UserOptions;
