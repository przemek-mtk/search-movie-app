import React from "react";
import PropTypes from "prop-types";

const AboutInfobar = ({ runtime, genres }) => {
  return (
    <div className="movie-infobar">
      <span className="movie-infobar__runtime">{`${runtime}min`}</span>

      {genres.map((genre, index) => {
        if (index !== genres.length - 1) {
          return <span key={genre.id}>{`${genre.name} / `}</span>;
        } else {
          return <span key={genre.id}>{genre.name}</span>;
        }
      })}
    </div>
  );
};

AboutInfobar.propTypes = {
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
};

export default AboutInfobar;
