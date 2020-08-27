import styled from "styled-components";

const StyledSavedList = styled.div`
  .saved-list__item {
    padding: 4px 0;
    display: flex;
    justify-content: flex-start;
    border-top: 1px solid ${(props) => props.theme.shadow};
  }

  .saved-list__describe {
    display: flex;
    flex-direction: column;
  }

  .saved-list__describe {
    flex: 1;
  }
`;

export default StyledSavedList;
