import styled from "styled-components"

const StyledVideos = styled.div`
  padding: 10px;
  /* color: ${props => props.theme.onbackground}; */
  /* background: ${props => props.theme.background}; */

  h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
  }

  .video-list {
    width: 100%; 
    white-space: nowrap;
    overflow-x: auto;
    
  }

`;

export default StyledVideos;