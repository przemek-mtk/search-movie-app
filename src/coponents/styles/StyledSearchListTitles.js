import styled from "styled-components"

const StyledSearchListTtitles = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  /* background: ${props => props.theme.background}; */
  /* background: rgb(255,255,255); */
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%);

  ul {
    padding: 0;
    margin: 5px 0;
    list-style: none;
  }
`;

export default StyledSearchListTtitles;