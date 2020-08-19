import React from "react";
import { Link } from "react-router-dom";
import StyledSearchItemTitle from "./styles/StyledSearchItemTitle";

const SearchItemTitle = ({ item }) => {
  const { media_type, id, name } = item;
  const title = item.title || name;
  const type = media_type || "person";

  return (
    <StyledSearchItemTitle>
      <Link to={`/${type}/${id}`}>
        {title}
      </Link>
    </StyledSearchItemTitle>
  );
};

export default SearchItemTitle;
