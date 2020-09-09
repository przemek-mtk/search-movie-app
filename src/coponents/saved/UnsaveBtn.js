import React, { useState } from "react";
import StyledUnsaveBtn from "./styles/StyledUnsaveBtn";
import UnsaveOption from "./UnsaveOption";
import PropTypes from "prop-types";

const UnsaveBtn = ({ ...rest }) => {
  const [showOption, setShowOption] = useState(false);

  return (
    <StyledUnsaveBtn>
      <button onClick={() => setShowOption((prevState) => !prevState)}>
        <i className="fas fa-ellipsis-v"></i>
      </button>

      {showOption && <UnsaveOption setShowOption={setShowOption} {...rest} />}
    </StyledUnsaveBtn>
  );
};

UnsaveBtn.propTypes = {
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default UnsaveBtn;
