import styled from "styled-components"

const StyledUserOptions = styled.div`
  margin-top: 2px; 
  background: ${props => props.theme.surface};
  color: ${props => props.theme.onbackground};
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: capitalize;
  position: absolute;
  top: 100%;
  right: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 1px ${props => props.theme.shadow};

  .options__element {
    padding: 10px 15px;
  }

  .options__element:hover {
    background: ${props => props.theme.background};
  }

  .options__element:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid ${props => props.theme.shadow};
  }

  .options__element:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .options__element * {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
  }

  .options__element a {
    width: 100%;
    color: ${props => props.theme.onsurface};
  }

  .options__element svg {
    font-size: 16px;
    color: ${props => props.theme.primary};
  }

  .options__element input[type="checkbox"] {
    position: absolute;
    left: -99999px;
  }

  .options__element span {
    padding: 0 15px;
  }

  .options__element input[type="checkbox"]:focus + .switch{
    box-shadow: 0 0 2px ${props => props.theme.primary};
  }

  .options__element input[type="checkbox"]:checked + .switch:before {
    transform: translateX(19px);
  }

  .switch {
    width: 35px;
    height: 12px;
    border-radius: 25px;
    background: ${props => props.theme.shadow};
    position: relative;
    cursor: pointer;
    transition: 0.4s;
  }

  .switch:before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    background:  ${props => props.theme.primary};
    border-radius: 25px;
    position: absolute;
    top: -2px;
    left: 0;
    transition: 0.4s;
  }
`;

export default StyledUserOptions;