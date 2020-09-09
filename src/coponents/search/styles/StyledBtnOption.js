import styled from "styled-components";

const StyledBtnOption = styled.button`
  margin: 25px 0 20px;
  padding: 4px 8px;
  background: ${(props) => props.theme.primary};
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: capitalize;
  color: ${(props) => props.theme.onprimary};
  outline: none;
  border: none;
  border-radius: 4px;
  opacity: 1;
  transition: 0.2s ease all;
  align-self: flex-end;

  &:focus {
    box-shadow: 0 0 3px ${(props) => props.theme.primary};
  }

  &:hover {
    opacity: 0.8;
  }

  span,
  svg {
    vertical-align: middle;
  }

  span {
    padding-left: 6px;
  }

  svg {
    font-size: 10px;
  }
`;

export default StyledBtnOption;
