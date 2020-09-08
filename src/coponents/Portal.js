import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const Portal = ({ children }) => {
  const portal = document.getElementById("portal");
  const portalBox = document.createElement("div");

  useEffect(() => {
    portal.appendChild(portalBox);

    return () => portal.removeChild(portalBox);
  }, [portal, portalBox]);

  return createPortal(children, portalBox);
};

Portal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Portal;
