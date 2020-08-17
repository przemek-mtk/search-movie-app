import React from "react";
import StyledSearch from "./styles/StyledSearch";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <StyledSearch>
      <div className="search-box">
        <form>
          <label>
            <input className="search-box__input" type="text" name="search" />
            <span>search</span>
            <div className="search-box__icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </label>
        </form>
      </div>
    </StyledSearch>
  );
};

export default Search;
