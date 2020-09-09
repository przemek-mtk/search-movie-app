import styled from "styled-components";

const StyledDetailedInfoMeta = styled.li`
  padding: 0 10px 4px;

  .meta_label {
    text-transform: capitalize;
    color: ${(props) => props.theme.secondary};
    padding-right: 4px;
  }
`;

export default StyledDetailedInfoMeta;
