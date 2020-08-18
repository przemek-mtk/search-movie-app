import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faHome, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledList, StyledNavbar } from "./styles/StyledNavbar";
import UserOptions from "./UserOptions";

const Navbar = () => {
  const [optionVisible, setOptionVisible] = useState(false);

  return (
    <StyledNavbar>
      <StyledList nightmode={false}>
        <li className="nav-list__item">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li className="nav-list__item">
          <button onClick={() => setOptionVisible((prevState) => !prevState)}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </li>
      </StyledList>

      {optionVisible && <UserOptions setOptionVisible={setOptionVisible} />}
    </StyledNavbar>
  );
};

export default Navbar;
