import React from "react";
import Portal from "../Portal";
import PopupMessage from "./PopupMessage";
import StyledPopupBox from "./styles/StyledPopupBox";
import PropTypes from "prop-types";

const PopupBox = ({ actionArray, deleteElement }) => {
  return actionArray.length > 0 ? (
    <Portal>
      <StyledPopupBox>
        {actionArray.map((item, id) => (
          <PopupMessage key={id} time={item.time} deleteElement={deleteElement}>
            {item.message}
          </PopupMessage>
        ))}
      </StyledPopupBox>
    </Portal>
  ) : null;
};

PopupBox.propTypes = {
  actionArray: PropTypes.array.isRequired,
  deleteElement: PropTypes.func.isRequired,
};

export default PopupBox;
