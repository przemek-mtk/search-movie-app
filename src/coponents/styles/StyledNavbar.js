import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  background: ${props => props.theme.surface};
  padding: 6px 0;
  position: relative;
`;

export const StyledList = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .nav-list__item {
    height: 48px;
    width: 48px;
    border: 2px solid transparent;
    border-radius: 5px;
    margin: 0 10px;
  }

  .nav-list__item a, .nav-list__item button {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 24px;
    line-height: 44px;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.primary};
    background: transparent;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  } 

  .nav-list__item:hover {
    /* ze względu na opacity dla bg i border */
      background: ${props => (props.nightmode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' )};
      border: 2px solid ${props => (props.nightmode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)' )};
    }

`;