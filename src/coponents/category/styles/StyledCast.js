import styled from "styled-components"

const StyledCast = styled.div`
  padding: 10px;

  h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
  }

  .cast-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .cast-load {
    width: 100%;
    text-align: center;
  }

`;

export default StyledCast;