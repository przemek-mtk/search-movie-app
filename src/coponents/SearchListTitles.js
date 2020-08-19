import React, { useContext } from "react";
import StyledSearchListTitles from "./styles/StyledSearchListTitles";
import { SearchContext } from "../context/SearchContext";
import SearchItemTitle from "./SearchItemTitle";
import PropTypes from "prop-types";

const SearchListTitles = ({ query }) => {
  const { searchData, isError, isLoading } = useContext(SearchContext);
  let result;

  if (!isLoading && query.length && !searchData.length) {
    result = <p className="not-found">Not found</p>;
  } else if (isError) {
    result = <p className="error">Error</p>;
  } else if (query.length) {
    result = (
      <ul>
        {searchData.map((item) => (
          <SearchItemTitle key={item.id} item={item} />
        ))}
      </ul>
    );
  }

  return <StyledSearchListTitles>{result}</StyledSearchListTitles>;
};

SearchListTitles.propTypes = {
  query: PropTypes.string.isRequired,
};

export default SearchListTitles;
