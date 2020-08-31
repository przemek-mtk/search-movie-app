import styled from "styled-components";

const StyledUnsaveBtn = styled.div`
  height: 32px;
  width: 32px;
  position: relative;

  button {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: ${(props) => props.theme.primary};
    border: 2px solid transparent;
    border-radius: 4px;
    background: ${(props) => props.theme.background};
    outline: none;
    cursor: pointer;
  }

  button:focus,
  button:hover {
    /* ze względu na opacity dla bg i border */
    background: ${(props) =>
      props.nightmode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
    border: 2px solid
      ${(props) =>
        props.nightmode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
  }

  .unsave-option {
    margin-top: 3px;
    background: ${(props) => props.theme.surface};
    color: ${(props) => props.theme.onbackground};
    position: absolute;
    top: 100%;
    right: 0;
    border-radius: 4px;
    box-shadow: 0px 0px 2px 1px ${(props) => props.theme.shadow};
    z-index: 9999;
    padding: 15px 15px;
    outline: none;
    cursor: pointer;
    text-transform: capitalize;
    font-weight: 600;
  }

  .unsave-option:hover,
  .unsave-option:focus {
    background: ${(props) => props.theme.surface};
  }
`;

export default StyledUnsaveBtn;
