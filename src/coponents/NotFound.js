import React from "react";
import StyledError from "./styles/StyledError";
import { useHistory } from "react-router-dom";

const NotFound = (props) => {
  const { push } = useHistory();

  return (
    <StyledError>
      <div>
        <p className="main">page not found</p>
      </div>

      <button onClick={() => push({ pathname: "/" })}>go home</button>
    </StyledError>
  );
};

export default NotFound;
