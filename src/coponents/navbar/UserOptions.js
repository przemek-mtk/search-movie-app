import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
        <i className="fas fa-moon"></i>
        <span>nightmode</span>
        <label>
          <input
            type="checkbox"
            name="nightmode"
            onChange={changeTheme}
            checked={nightmode}
          />
          <span className="switch"></span>
        </label>
      </button>

      <Link
        to="/saved/movie"
        className="options__element"
        onClick={() => setOptionVisible(false)}
      >
        <i className="fas fa-bookmark"></i>
        <span>saved</span>
      </Link>
    </StyledUserOptions>
  );
};

UserOptions.propTypes = {
  setOptionVisible: PropTypes.func.isRequired,
};

export default UserOptions;
