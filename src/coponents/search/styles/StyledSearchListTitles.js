import styled from "styled-components";

const StyledSearchListTtitles = styled.div`
  width: 100%;
  height: 0;
  background: ${(props) => props.theme.background};
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 888;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .not-found,
  .error {
    margin: 0;
    padding: 15px 8px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }

  .not-found {
    color: ${(props) => props.theme.primary};
  }

  .error {
    color: ${(props) => props.theme.onerror};
    background: ${(props) => props.theme.error};
  }
`;

export default StyledSearchListTtitles;
