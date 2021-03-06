import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.theme.onbackground};
    background: ${(props) => props.theme.background};
  }

  #root {
    display: flex;
    flex-direction: column;
  }


  .body--overflow-hidden {
    overflow: hidden;
  }

  .container {
    max-width: 900px;
    margin: 10px auto;
    box-shadow: 0 0 4px ${(props) => props.theme.shadow};
    flex-grow: 1;
  }

  /* btn used in 2 components */
  .show-more {
    outline: none;
    border: none;
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.onprimary};
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 4px;
  }

  .show-more:hover,
  .show-more:focus {
    box-shadow: 0 0 4px ${(props) => props.theme.primary};
  }

  .show-more:disabled {
    opacity: 0.4;
  }
`;

export default GlobalStyle;
