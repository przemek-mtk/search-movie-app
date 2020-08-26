import styled from "styled-components";

const StyledAboutMovie = styled.div`
  color: ${(props) => props.theme.onsurface};
  background: ${(props) => props.theme.surface};
  padding: 10px 10px 4px;
  border-bottom: 1px solid ${(props) => props.theme.shadow};

  .movie-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title {
    margin: 0;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${(props) => props.theme.onbackground};
  }

  .title span {
    font-size: 12px;
    font-weight: 400;
  }

  .save {
    color: ${(props) => props.theme.primary};
    font-size: 28px;
  }

  .save svg {
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }

  .movie-infobar {
    margin: 0;
    padding: 15px 0 5px;
    font-size: 13px;
  }

  .movie-infobar__runtime {
    position: relative;
    margin-right: 30px;
  }

  .movie-infobar__runtime:after {
    content: "|";
    position: absolute;
    top: -1px;
    right: -15px;
  }
`;

export default StyledAboutMovie;
