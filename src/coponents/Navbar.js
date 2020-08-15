import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faHome,
  faEllipsisV,
  faMoon, //do przeniesienia
  faBookmark, //do przeniesienia
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledList, StyledNavbar } from "./styles/StyledNavbar";

const Navbar = () => {
  const [optionVisible, setOptionVisible] = useState(false);

  return (
    <StyledNavbar>
      <StyledList>
        <li className="nav-list__item">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li className="nav-list__item">
          <button>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </li>
      </StyledList>
    </StyledNavbar>
  );
};

export default Navbar;
