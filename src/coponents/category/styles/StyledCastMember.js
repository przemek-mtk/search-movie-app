import styled from "styled-components";

const StyledCastMember = styled.div`
  width: 33%;
  text-align: center;
  padding-bottom: 20px;

  a {
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  .cast-member__info {
    font-size: 12px;
  }

  .cast-member__info p {
    margin: 0;
  }

  .cast-member__info p:first-of-type {
    font-size: 14px;
    font-family: "Roboto Condensed", sans-serif;
    color: ${(props) => props.theme.onbackground};
  }

  .cast-member__info p:last-of-type {
    color: ${(props) => props.theme.secondary};
  }

  @media (min-width: 700px) {
    width: 25%;
  }
`;

export default StyledCastMember;
