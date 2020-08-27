import React, { useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import PropTypes from "prop-types";

const UnsaveOption = ({ setShowOption }) => {
  const refOptions = useRef(null);
  useOutsideClick(refOptions, () => setShowOption(false));

  return (
    <div ref={refOptions} className="unsave-option">
      unsave
    </div>
  );
};

UnsaveOption.propTypes = {
  setShowOption: PropTypes.func.isRequired,
};

export default UnsaveOption;
