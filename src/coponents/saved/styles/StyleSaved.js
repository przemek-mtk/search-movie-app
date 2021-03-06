import styled from "styled-components";

const StyledSaved = styled.div`
  padding: 10px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  flex-grow: 1;

  ul {
    margin: 0;
    margin-bottom: 15px;
    padding: 10px 0 0;
    list-style: none;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
  }

  ul li {
    width: 90px;
    text-align: center;
  }

  ul a {
    display: block;
    width: 100%;
    padding: 4px 10px;
    font-size: 16px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: ${(props) => props.theme.onbackground};
    outline: none;
  }

  ul a:hover,
  ul a:focus {
    border-bottom: 2px solid ${(props) => props.theme.onbackground};
  }

  .saved-link--active {
    font-weight: 700;
    border-bottom: 2px solid ${(props) => props.theme.onbackground};
  }

  @media (min-width: 700px) {
    ul {
      margin-bottom: 25px;
    }
  }
`;

export default StyledSaved;
