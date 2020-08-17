import styled from "styled-components"

const StyledSearchOptions = styled.div`
  width: 100%;
  padding-bottom: 25px;
  flex: 1 1 auto;
  font-size: 14px;
  color: ${props => props.theme.onsurface};
  border-top: 1px solid ${props => props.theme.shadow};

  h2 {
    margin: 10px 0;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
  }

  label {
    display: block;
    margin-top: 4px;
  }

  input, span {
    margin: 0;
    padding: 0;
    vertical-align: middle;
    line-height: 14px;
    text-transform: capitalize;
  }

  span {
    padding-left: 4px;
  }

`;

export default StyledSearchOptions;