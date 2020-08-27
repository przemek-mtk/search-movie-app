import React from "react";
import StyledError from "./styles/StyledError";
import { useHistory } from "react-router-dom";

const ErrorPage = (props) => {
  const { push } = useHistory();

  return (
    <StyledError>
      <div>
        <p className="main">error</p>
        <p className="side">try again later</p>
      </div>

      <button onClick={() => push({ pathname: "/" })}>go home</button>
    </StyledError>
  );
};

export default ErrorPage;
