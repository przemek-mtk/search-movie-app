import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  background: ${props => props.theme.surface};
  /* text-align: center; */
  padding: 10px 0;  
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
    /* padding: 0 15px; */
    /* height: 24px; */
    /* width: 24px; */
  }

  .nav-list__item a, .nav-list__item button {
    display: block;
    /* padding: 10px 15px; */
    text-decoration: none;
    color: ${props => props.theme.primary};
    border: none;
    background: transparent;
    /* font-size: 24px; */
    cursor: pointer;
  } 

  .nav-list__item:hover {
    background: red;
  }

`;