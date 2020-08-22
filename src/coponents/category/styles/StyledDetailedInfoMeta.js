import styled from "styled-components"

const StyledDetailedInfoMeta = styled.li`
  padding-bottom: 4px;

  .meta_label{
    text-transform: capitalize;
    color: ${props => props.theme.shadow};
    padding-right: 4px;
  }
`;

export default StyledDetailedInfoMeta;