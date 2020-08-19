import React from "react";
import { Link } from "react-router-dom";
import StyledSearchItemTitle from "./styles/StyledSearchItemTitle";

const SearchItemTitle = ({ item }) => {
  const { media_type, id, name } = item;
  const title = item.title || name;
  
console.log(item.id);

  return (
    <StyledSearchItemTitle>
      <Link key={id} to={`/${media_type}/${id}}`}>
        {title}
      </Link>
    </StyledSearchItemTitle>
  );
};

export default SearchItemTitle;
