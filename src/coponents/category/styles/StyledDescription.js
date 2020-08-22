import styled from "styled-components";

const StyledDescription = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 1.5em;
  padding: 15px 10px;
  color: ${props => props.theme.onbackground};
  background: ${props => props.theme.background};

  .movie-desc {
    flex: 2;
  }

  .movie-desc p {
    margin: 0;
  }
`;

export default StyledDescription;
