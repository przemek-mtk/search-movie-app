import React, { useState, useRef } from "react";
import StyledUnsaveBtn from "./styles/StyledUnsaveBtn";
import UnsaveOption from "./UnsaveOption";

const UnsaveBtn = (props) => {
  const [showOption, setShowOption] = useState(false);

  return (
    <StyledUnsaveBtn>
      <button onClick={() => setShowOption((prevState) => !prevState)}>
        <i class="fas fa-ellipsis-v"></i>
      </button>

      {showOption && <UnsaveOption setShowOption={setShowOption} />}
    </StyledUnsaveBtn>
  );
};

export default UnsaveBtn;
