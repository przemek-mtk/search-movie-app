import React from "react";
import StyledFooter from "./styles/StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&#169; 2020 Przemysław Matejkowski</p>
      <p>
        All dates comes from{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="movie-db"></i>
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
