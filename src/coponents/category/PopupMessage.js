import React, { useEffect } from "react";
import StyledPopupMessage from "./styles/StyledPopupMessage";
import PropTypes from "prop-types";

const PopupMessage = ({ time, deleteElement, children }) => {
  useEffect(() => {
    let timer = setInterval(() => {
      let currTime = Date.now();

      if (currTime - time > 3000) {
        deleteElement();
      }
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return <StyledPopupMessage>{children}</StyledPopupMessage>;
};

PopupMessage.propTypes = {
  time: PropTypes.number.isRequired,
  deleteElement: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default PopupMessage;
