import React from "react";
import StyledKnownFor from "./styles/StyledKnownFor";
import KnownForPoster from "./KnownForPoster";
import PropTypes from "prop-types";

const KnownFor = ({ title, movies }) => {
  return (
    !!movies.length && (
      <StyledKnownFor>
        <h2>{title}</h2>

        <div className="movies-list">
          {movies.map((movie) => {
            return <KnownForPoster key={movie.id} movie={movie} />;
          })}
        </div>
      </StyledKnownFor>
    )
  );
};

KnownFor.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default KnownFor;
