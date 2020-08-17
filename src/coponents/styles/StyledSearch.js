import styled from "styled-components"

const StyledSearch = styled.section`
  width: 100%;
  /* height: 100%; */
  
  /* może tylko dla dużych szerokości */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  font-family: 'Open Sans', sans-serif;


  .search-box {
    width: 90%;
    max-width: 700px;
    /*dla testu -- height*/
    height: 150px; 
    margin: 40px auto;
    padding: 10px 20px;
    background: ${props => props.theme.surface};
    box-shadow: 0 0 4px ${props => props.theme.shadow};
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-box form {
    width: 100%;  
    position: relative;
  }

  .search-box__input {
    width: 100%;
    padding: 16px 32px 12px 12px;
    background: transparent;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid ${props => props.theme.onsurface};
    border-radius: 4px;
    outline: none;
  }


  .search-box__input:hover {
    border-color: ${props => props.theme.onbackground};
  }

  .search-box__input:focus {
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 1px ${props => props.theme.primary};
    caret-color: ${props => props.theme.primary};
  }

  .search-box__input + span {
    padding: 0 4px;
    position: absolute;
    top: 16px;
    left: 12px;
    font-size: 14px;
    color: ${props => props.theme.onsurface};
    text-transform: capitalize;
    background: ${props => props.theme.surface};
    transition: 0.2s ease all;
  }

  .search-box__input:focus + span {
    font-size: 10px;
    font-weight: 600;
    color: ${props => props.theme.primary};
    top: -6px;
  }

  .search-box__icon {
    position: absolute; 
    top: 16px;
    right: 12px;
    font-size: 16px;
    color: ${props => props.theme.onsurface};
  }

`;

export default StyledSearch;