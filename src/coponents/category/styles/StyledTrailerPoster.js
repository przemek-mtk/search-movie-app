import styled, { css } from "styled-components";

const StyledPoster = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 3px solid #fff;
    border-radius: 50%;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 3px #000;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .play-icon {
    display: block;
    margin-left: 4px;
    font-size: 24px;
    color: #fff;
  }

  ${(props) =>
    props.thumbnails &&
    css`
      margin: 5px;
      display: inline-block;
      width: 210px;

      img {
        border: 2px solid
          ${(props) =>
            props.active ? props.theme.primary : props.theme.secondary};
      }

      .play {
        width: 32px;
        height: 32px;
      }

      .play-icon {
        margin-left: 2px;
        font-size: 14px;
      }
    `}

  ${(props) =>
    props.player &&
    css`
      margin: 5px 5px 5px 0;
      width: 145px;

      &:last-of-type {
        margin-right: 0;
      }
    `}
`;

export default StyledPoster;
