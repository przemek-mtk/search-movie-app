import React from "react";
import StyledBtnOption from "./styles/StyledBtnOption";
import PropTypes from "prop-types";

const BtnOption = ({ setVisibleOption }) => {
  return (
    <StyledBtnOption onClick={setVisibleOption}>
      <i className="fas fa-cog"></i>
      <span>options</span>
    </StyledBtnOption>
  );
};

BtnOption.propTypes = {
  setVisibleOption: PropTypes.func.isRequired,
};

export default BtnOption;
