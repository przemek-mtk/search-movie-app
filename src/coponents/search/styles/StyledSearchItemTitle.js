import styled from "styled-components";

const StyledSearchItemTitle = styled.li`
  font-family: "Roboto Condensed", sans-serif;

  a {
    display: block;
    width: 100%;
    padding: 5px 8px;
    text-decoration: none;
    color: ${(props) => props.theme.onbackground};
  }

  a:hover {
    background: ${(props) => props.theme.surface};
  }
`;

export default StyledSearchItemTitle;
