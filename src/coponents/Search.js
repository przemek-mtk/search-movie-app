import React, { useState, useEffect, useContext } from "react";
import StyledSearch from "./styles/StyledSearch";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchOptions from "./SearchOptions";
import StyledBtnOption from "./styles/StyledBtnOption";
import { SearchContext } from "../context/SearchContext";
import Spinner from "./Spinner";
import { ThemeContext } from "styled-components";
import SearchListTitles from "./SearchListTitles";

const Search = (props) => {
  const { query, isLoading, dispatch } = useContext(SearchContext);
  const [visibleOption, setVisibleOption] = useState(false);
  const [focus, setFocus] = useState(false);

  const theme = useContext(ThemeContext);
  console.log(theme);

  useEffect(() => {
    query.length ? setFocus(true) : setFocus(false);
  }, [query]);

  return (
    <StyledSearch>
      <div className="search-box">
        <form>
          <label>
            <input
              className={`search-box__input ${focus ? "focus" : ""}`}
              type="text"
              name="search"
              value={query}
              onChange={(e) =>
                dispatch({ type: "CHANGE_QUERY", query: e.target.value })
              }
            />
            <span>search</span>

            {isLoading ? (
              <div className="search-box__spinner">
                <Spinner
                  side={24}
                  color={theme.primarySpinner}
                  bg={theme.surfaceSpinner}
                />
              </div>
            ) : (
              <div className="search-box__icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            )}
          </label>

          {focus && <SearchListTitles />}
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
