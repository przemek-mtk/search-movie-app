import styled from "styled-components";

const StyledVideosPlaylist = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(200, 200, 200, 0.4);
  /* background: rgba(20, 20, 20, 0.4); */

  .player-box {
    width: 100%;
    margin: 0 auto;
    padding: 25px 0;
    background: ${(props) => props.theme.surface};
    border-radius: 4px;
    overflow: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .player-wrapper {
    width: 100%;
    padding-bottom: 56.25%;
    position: relative;
  }

  @media (min-width: 700px) {
    .player-box {
      max-width: 800px;
      padding: 25px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default StyledVideosPlaylist;
