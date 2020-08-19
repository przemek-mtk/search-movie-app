import React from "react";
import StyledBtnOption from "./styles/StyledBtnOption";
import PropTypes from "prop-types";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BtnOption = ({ setVisibleOption }) => {
  return (
    <StyledBtnOption onClick={setVisibleOption}>
      <FontAwesomeIcon icon={faCog} />
      <span>options</span>
    </StyledBtnOption>
  );
};

BtnOption.propTypes = {
  setVisibleOption: PropTypes.func.isRequired,
};

export default BtnOption;
