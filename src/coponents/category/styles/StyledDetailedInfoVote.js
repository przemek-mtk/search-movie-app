import styled from "styled-components"

const StyledDetailedInfoVote = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.theme.surface};
  border-top: 1px solid ${props => props.theme.shadow};
  border-bottom: 1px solid ${props => props.theme.shadow};
  padding: 10px;

  .vote__icon {
    width: 32px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    vertical-align: middle;
    color: gold;
    font-size: 24px;
  }

  .vote__count span {
    display: block;
  }

  .vote__count span:last-of-type {
    font-size: 12px;
    color: ${props => props.theme.onsurface}
  }

`;

export default StyledDetailedInfoVote;