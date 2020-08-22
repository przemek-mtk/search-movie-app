import styled from "styled-components"

const StyledDetailedInfo = styled.div`
  padding: 10px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.onbackground};
  font-size: 14px;

  ul {
    margin: 0;
    padding: 10px 0;
  }

`;

export default StyledDetailedInfo;