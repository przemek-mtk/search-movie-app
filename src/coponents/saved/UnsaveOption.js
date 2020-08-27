import React, { useRef, useContext } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import PropTypes from "prop-types";

const UnsaveOption = ({ setShowOption, id, removeItem }) => {
  const refOptions = useRef(null);
  useOutsideClick(refOptions, () => setShowOption(false));

  return (
    <div
      ref={refOptions}
      className="unsave-option"
      onClick={() => removeItem(id)}
    >
      unsave
    </div>
  );
};

UnsaveOption.propTypes = {
  setShowOption: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default UnsaveOption;
