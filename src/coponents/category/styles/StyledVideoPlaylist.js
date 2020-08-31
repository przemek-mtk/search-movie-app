import styled from "styled-components";

const StyledVideosPlaylist = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  /* background: rgba(200, 200, 200, 0.4); */
  background: rgba(20, 20, 20, 0.4);

  .player-box {
    
    background: ${(props) => props.theme.surface};
  }

  .player-wrapper {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    border-radius: 4px;
    border: 1px solid #999;
    overflow: auto;

    width: 100%;
    padding-bottom: 56.25%;
    position: relative;
  }
`;

export default StyledVideosPlaylist;
