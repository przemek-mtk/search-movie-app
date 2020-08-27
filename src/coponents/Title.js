import React from "react";
import StyledTitle from "./styles/StyledTitle";
import PropTypes from "prop-types";

const Title = ({ title, date, lastDate, ...rest}) => {
  const year = new Date(date).getFullYear();
  const lastYear = lastDate ? new Date(lastDate).getFullYear() : null; //only for tv
  return (
    <StyledTitle {...rest}>
      {title}
      {lastYear ? (
        <span>{` (${year}-${lastYear})`}</span>
      ) : (
        <span>{` (${year})`}</span>
      )}
    </StyledTitle>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  lastDate: PropTypes.string,
};

export default Title;
