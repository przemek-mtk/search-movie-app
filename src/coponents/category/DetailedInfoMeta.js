import React from "react";
import StyledDetailedInfoMeta from "./styles/StyledDetailedInfoMeta"
import PropTypes from "prop-types";

const DetailedInfoMeta = ({ label, data }) => {
  return (
    data && (
      <StyledDetailedInfoMeta>
        <span className="meta_label">{`${label}:`}</span>
        <span>{data}</span>
      </StyledDetailedInfoMeta>
    )
  );
};

DetailedInfoMeta.propTypes = {
  label: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DetailedInfoMeta;
