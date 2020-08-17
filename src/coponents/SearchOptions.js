import React from "react";
// import { faCog } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyledSearchOptions from "./styles/StyledSearchOptions";

const SearchOptions = () => {
  return (
    <StyledSearchOptions>
      <h2>What are you looking for?</h2>
      <div>
        <label>
          <input type="radio" name="search-option" />
          <span>movies</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="search-option" />
          <span>tv series</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="search-option" />
          <span>actors</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="search-option" />
          <span>all</span>
        </label>
      </div>
    </StyledSearchOptions>
  );
};

export default SearchOptions;
