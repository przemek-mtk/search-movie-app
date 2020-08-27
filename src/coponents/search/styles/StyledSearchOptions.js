import styled from "styled-components";

const StyledSearchOptions = styled.div`
  width: 100%;
  padding-bottom: 25px;
  flex: 1 1 auto;
  color: ${(props) => props.theme.onsurface};
  border-top: 1px solid ${(props) => props.theme.shadow};

  h2 {
    margin: 10px 0;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 18px;
  }
`;

export default StyledSearchOptions;
