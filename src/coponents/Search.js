import React, { useContext } from "react";
import StyledSearch from "./styles/StyledSearch";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchOptions from "./SearchOptions";
import StyledBtnOption from "./styles/StyledBtnOption"

const Search = (props) => {

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

        <StyledBtnOption >
          <FontAwesomeIcon icon={faCog} />
          <span>options</span>
        </StyledBtnOption>
      
      {false && 
        <SearchOptions />
      }

      </div>
    </StyledSearch>
  );
};

export default Search;
