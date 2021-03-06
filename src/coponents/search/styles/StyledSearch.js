import styled from "styled-components";

const StyledSearch = styled.section`
  width: 100%;
  font-family: "Open Sans", sans-serif;
  flex-grow: 1;

  .search-box {
    width: 90%;
    max-width: 700px;
    min-height: 150px;
    margin: 40px auto;
    padding: 10px 20px 0;
    box-shadow: 0 0 4px ${(props) => props.theme.shadow};
    border-radius: 4px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
  }

  .search-box form {
    width: 100%;
    margin-top: 30px;
    position: relative;
    flex: 1 1 auto;
  }

  .search-box__input {
    width: 100%;
    padding: 16px 32px 12px 12px;
    background: transparent;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid ${(props) => props.theme.onsurface};
    color: ${(props) => props.theme.onsurface};
    border-radius: 4px;
    outline: none;
  }

  .search-box__input:hover {
    border-color: ${(props) => props.theme.onbackground};
  }

  /* style for focus input */
  .search-box__input:focus,
  .search-box__input.focus {
    border-color: ${(props) => props.theme.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.primary};
    caret-color: ${(props) => props.theme.primary};
  }

  .search-box__input + span {
    padding: 0 4px;
    position: absolute;
    top: 16px;
    left: 12px;
    font-size: 14px;
    color: ${(props) => props.theme.onsurface};
    text-transform: capitalize;
    background: ${(props) => props.theme.background};
    transition: 0.2s ease top;
  }

  .search-box__input:focus + span,
  .search-box__input.focus + span {
    font-size: 10px;
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    top: -6px;
  }

  .search-box__icon {
    position: absolute;
    top: 16px;
    right: 12px;
    font-size: 16px;
    color: ${(props) => props.theme.onsurface};
  }

  .search-box__spinner {
    position: absolute;
    top: 14px;
    right: 10px;
  }

  /*
   style for SearchListTitles.js 
   show list titles when user focus input and hide when onblur
   */
  .search-box:focus-within form label + div {
    height: auto;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid ${(props) => props.theme.primary};
    border-top: none;
  }

  @media (min-width: 700px) {
    .search-box {
      margin-top: 80px;
    }
  }
`;

export default StyledSearch;
