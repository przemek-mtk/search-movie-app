import styled, { css } from "styled-components";

const StyledInfoVote = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4px;
  

  .vote__icon {
    width: 24px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    vertical-align: middle;
    color: gold;
    font-size: 18px;
  }

  .vote__count {
    margin-left: 5px;
  }

  .vote__count span {
    display: block;
  }

  .vote__count span:last-of-type {
    font-size: 12px;
    color: ${(props) => props.theme.onsurface};
  }
  ${(props) =>
    props.detail &&
    css`
      border-top: 1px solid ${(props) => props.theme.shadow};
      border-bottom: 1px solid ${(props) => props.theme.shadow};
      background: ${(props) => props.theme.surface};
      padding: 10px;

      .vote__icon {
        width: 32px;
        font-size: 24px;
      }
    `}
`;

export default StyledInfoVote;
