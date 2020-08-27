import styled from "styled-components";

const StyledError = styled.div`
  padding: 10px;
  margin: 0 auto;
  max-width: 700px;
  text-transform: capitalize;


  div {
    margin: 15px 0;
    padding: 20px 15px;
    color: ${(props) => props.theme.onerror};
    background: ${(props) => props.theme.error};
    border-radius: 4px;
  }

  p {
    margin: 0;
    font-weight: 600;
  }

  .main {
    padding-bottom: 4px;
    font-size: 24px;
  }

  .side {
    font-size: 14px;
  }

  button {
    display: block;
    margin: 0 0px 0 auto;
    padding: 15px;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.onprimary};
    background: ${(props) => props.theme.primary};
    outline: none;
    border: none;
    border-radius: 4px;
  }
`;

export default StyledError;
