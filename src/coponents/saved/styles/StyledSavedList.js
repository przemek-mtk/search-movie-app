import styled from "styled-components";

const StyledSavedList = styled.div`
  .saved-list__item {
    padding: 4px 0;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.shadow};
  }

  .saved-list__item a {
    text-decoration: none;
  }

  .saved-list__item:last-of-type {
    border-bottom: none;
  }

  .saved-list__describe {
    display: flex;
    flex-direction: column;
  }

  .saved-list__describe {
    flex: 1;
  }

  .empty {
    margin-top: 40px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 18px;
    text-align: center;
  }
`;

export default StyledSavedList;
