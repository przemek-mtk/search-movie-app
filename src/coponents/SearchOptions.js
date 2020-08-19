import React from "react";
import StyledSearchOptions from "./styles/StyledSearchOptions";
import SearchOptionRadio from "./SearchOptionRadio";

const SearchOptions = () => {
  return (
    <StyledSearchOptions>
      <h2>What are you looking for?</h2>

      <SearchOptionRadio value="movie" label="movies" />
      <SearchOptionRadio value="tv" label="tv series" />
      <SearchOptionRadio value="person" label="actors" />
      <SearchOptionRadio value="multi" label="all" />
    </StyledSearchOptions>
  );
};

export default SearchOptions;
