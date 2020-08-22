import styled from "styled-components"

const StyledCast = styled.div`
  padding: 10px;
  color: ${props => props.theme.onbackground};
  background: ${props => props.theme.background};

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

  .cast-load button {
    outline: none;
    border: none;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.onprimary};
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 4px;
  }

  .cast-load button:hover,
  .cast-load button:focus {
    box-shadow: 0 0 4px ${props => props.theme.primary};
  }

  .cast-load button:disabled {
    opacity: 0.4;
  }

`;

export default StyledCast;