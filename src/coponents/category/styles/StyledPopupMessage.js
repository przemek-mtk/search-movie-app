import styled from "styled-components";

const StyledPopupMessage = styled.div`
  width: 80%;
  /* może do zmiany zobaczymy przy większych szerokościach */
  max-width: 400px;
  margin: 5px auto;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.onprimary};
  border-radius: 4px;
  box-shadow: 0 0 2px ${(props) => props.theme.shadow};
`;

export default StyledPopupMessage;
