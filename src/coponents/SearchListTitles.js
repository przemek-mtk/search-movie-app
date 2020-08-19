import React, { useContext } from 'react';
import StyledSearchListTitles from "./styles/StyledSearchListTitles";
import {SearchContext} from "../context/SearchContext";
import SearchItemTitle from "./SearchItemTitle"

const SearchListTitles = (props) => {
  const { searchData, isError } = useContext(SearchContext);

  return ( 
    <StyledSearchListTitles>
      <ul>
      {
        searchData.map(item => <SearchItemTitle item={item} /> )
      }
      </ul>
    </StyledSearchListTitles>
   );
}
 
export default SearchListTitles;