import React, { useState, useContext } from "react";
import StyledSearch from "./styles/StyledSearch";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchOptions from "./SearchOptions";
import { SearchContext } from "../../context/SearchContext";
import Spinner from "../Spinner";
import { ThemeContext } from "styled-components";
import SearchListTitles from "./SearchListTitles";
import BtnOption from "./BtnOption";

const Search = (props) => {
  const { query, isLoading, dispatch } = useContext(SearchContext);
  const [visibleOption, setVisibleOption] = useState(false);
  const [focus, setFocus] = useState(false);

  const theme = useContext(ThemeContext);

  const handleFocus = () => setFocus(true);
  const handleBlur = () => setTimeout(() => setFocus(false), 200);
  const handleSetVisibleOption = () => {
    setVisibleOption((prevState) => !prevState);
  };

  return (
    <StyledSearch>
      <div className="search-box">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            <input
              className={`search-box__input ${query.length ? "focus" : ""}`}
              type="text"
              name="search"
              value={query}
              onChange={(e) =>
                dispatch({ type: "CHANGE_QUERY", query: e.target.value })
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span>search</span>

            {isLoading ? (
              <div className="search-box__spinner">
                <Spinner
                  side={24}
                  color={theme.primarySpinner}
                  bg={theme.backgroundSpinner}
                />
              </div>
            ) : (
              <div className="search-box__icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            )}
          </label>

          {focus && <SearchListTitles query={query} focus={focus} />}
        </form>

        <BtnOption setVisibleOption={handleSetVisibleOption} />

        {visibleOption && <SearchOptions />}
      </div>
    </StyledSearch>
  );
};

export default Search;
