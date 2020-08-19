import React, { useContext } from "react";
import StyledSearchOptionRadio from "./styles/StyledSearchOptionRadio";
import { SearchContext } from "../context/SearchContext";
import PropTypes from "prop-types";

const SearchOptionRadio = ({ value, label }) => {
  const { mediaType, dispatch } = useContext(SearchContext);

  const handleChecked = (e) => {
    dispatch({ type: "CHANGE_MEDIA_TYPE", mediaType: e.target.value });
  };

  return (
    <StyledSearchOptionRadio>
      <label>
        <input
          type="radio"
          name="search-option"
          value={value}
          onChange={handleChecked}
          checked={mediaType === value}
        />
        <span>{label}</span>
      </label>
    </StyledSearchOptionRadio>
  );
};

SearchOptionRadio.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default SearchOptionRadio;
