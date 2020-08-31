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

  .save {
    color: ${(props) => props.theme.primary};
    font-size: 28px;
    outline: none;
  }

  .save:hover svg {
    transform: scale(1.1);
    opacity: 0.6;
  }

  .save svg {
    cursor: pointer;
    vertical-align: top;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    transition: transform 0.2s ease;
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

  .person-infobar {
    text-transform: capitalize;
    color: ${(props) => props.theme.onsurface};
  }

  .person-infobar p {
    margin: 0;
  }
`;

export default StyledAboutMovie;
