import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StyledSearchItemTitle from "./styles/StyledSearchItemTitle";
import { SearchContext } from "../../context/SearchContext";

const SearchItemTitle = ({ item }) => {
  const { mediaType } = useContext(SearchContext);
  const { media_type, id, name } = item;
  const title = item.title || name;
  const type = media_type || mediaType;

  return (
    <StyledSearchItemTitle>
      <Link to={`/${type}/${id}`}>
        {title}
      </Link>
    </StyledSearchItemTitle>
  );
};

export default SearchItemTitle;
