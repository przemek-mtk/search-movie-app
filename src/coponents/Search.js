import React, { useState, useEffect, useContext } from "react";
import StyledSearch from "./styles/StyledSearch";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchOptions from "./SearchOptions";
import StyledBtnOption from "./styles/StyledBtnOption";
import { SearchContext } from "../context/SearchContext";

const Search = (props) => {
  const { search, dispatch } = useContext(SearchContext);
  const [visibleOption, setVisibleOption] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    search.query.length ? setFocus(true) : setFocus(false);
  }, [search.query]);

  return (
    <StyledSearch>
      <div className="search-box">
        <form>
          <label>
            <input
              className={`search-box__input ${focus ? "focus" : ""}`}
              type="text"
              name="search"
              value={search.query}
              onChange={(e) =>
                dispatch({ type: "CHANGE_QUERY", query: e.target.value })
              }
            />
            <span>search</span>
            <div className="search-box__icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </label>
        </form>

        <StyledBtnOption
          onClick={() => setVisibleOption((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={faCog} />
          <span>options</span>
        </StyledBtnOption>

        {visibleOption && <SearchOptions />}
      </div>
    </StyledSearch>
  );
};

export default Search;
