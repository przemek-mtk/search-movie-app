import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledList, StyledNavbar } from "./styles/StyledNavbar";
import UserOptions from "./UserOptions";

const Navbar = (props) => {
  const [optionVisible, setOptionVisible] = useState(false);

  return (
    <StyledNavbar>
      <StyledList nightmode={false}>
        <li className="nav-list__item">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </li>
        <li className="nav-list__item">
          <button onClick={() => setOptionVisible((prevState) => !prevState)}>
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </li>
      </StyledList>

      {optionVisible && <UserOptions setOptionVisible={setOptionVisible} />}
    </StyledNavbar>
  );
};

export default Navbar;
