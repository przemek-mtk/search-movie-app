import styled from "styled-components";

const StyledCastMember = styled.div`
  width: 33%;
  text-align: center;
  padding-bottom: 20px;

  .cast-member__info {
    font-size: 12px;
  }

  .cast-member__info p {
    margin: 0;
  }

  .cast-member__info p:first-of-type {
    font-size: 14px;
    font-family: "Roboto Condensed", sans-serif;
  }

  .cast-member__info p:last-of-type {
    color: ${props => props.theme.shadow};
  }
`;

export default StyledCastMember;
