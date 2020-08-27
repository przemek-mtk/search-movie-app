import styled, {css} from "styled-components";

const StyledTitle = styled.h2`
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.onbackground};

  span {
    font-size: 12px;
    font-weight: 400;
  }

  ${props => props.saved && css`
    font-size: 18px;
  `}
`;

export default StyledTitle;
