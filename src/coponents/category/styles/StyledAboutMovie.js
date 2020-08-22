import styled from "styled-components"

const StyledAboutMovie = styled.div`
  color: ${props => props.theme.onsurface};
  background: ${props => props.theme.surface};
  padding: 10px 10px 4px;
  border-bottom: 1px solid ${props => props.theme.shadow};

  .movie-title {
    margin: 0;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.onbackground};
  }

  .movie-title span {
    font-size: 12px;
    font-weight: 400;
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
    content: '|';
    position: absolute;
    top: -1px;
    right: -15px;
  }

`;

export default StyledAboutMovie;