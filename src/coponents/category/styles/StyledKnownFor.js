import styled from "styled-components";

const StyledKnownFor = styled.div`
  padding: 10px;

  h2 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 20px;
  }

  a {
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  .movies-list {
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
  }

  .movie-list__item {
    display: inline-block;
    text-align: center;
    width: 100px;
    margin: 5px;
  }

  .movie-list__info {
    font-size: 12px;
  }

  .movie-list__info p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .movie-list__info p:first-of-type {
    font-size: 14px;
    font-family: "Roboto Condensed", sans-serif;
    color: ${(props) => props.theme.onbackground};
  }

  .movie-list__info p:last-of-type {
    color: ${(props) => props.theme.shadow};
  }
`;

export default StyledKnownFor;
