import React, { useContext } from "react";
import StyledSearchOptions from "./styles/StyledSearchOptions";
import { SearchContext } from "../context/SearchContext";

const SearchOptions = () => {
  const { mediaType, dispatch } = useContext(SearchContext);

  const handleChecked = e => {
    dispatch({ type: "CHANGE_MEDIA_TYPE", mediaType: e.target.value });
  }

  return (
    <StyledSearchOptions>
      <h2>What are you looking for?</h2>
      <div>
        <label>
          <input type="radio" name="search-option" value="movie" onChange={handleChecked} checked={mediaType === "movie"} />
          <span>movies</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="search-option" value="tv" onChange={handleChecked} checked={mediaType === "tv"} />
          <span>tv series</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="search-option" value="person" onChange={handleChecked} checked={mediaType === "person"} />
          <span>actors</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="search-option" value="multi" onChange={handleChecked} checked={mediaType === "multi"} />
          <span>all</span>
        </label>
      </div>
    </StyledSearchOptions>
  );
};

export default SearchOptions;
