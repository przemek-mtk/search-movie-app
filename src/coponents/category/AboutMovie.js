import React from "react";
import StyledAboutMovie from "./styles/StyledAboutMovie";
import PropTypes from "prop-types";

const AboutMovie = ({ title, date, runtime, genres }) => {
  const year = new Date(date).getFullYear();

  return (
    <StyledAboutMovie>
      <div>

      <h2 className="movie-title">
        {title}
        <span>{` (${year})`}</span>
      </h2>


      <i class="far fa-bookmark"></i>
      <i class="fa fa-bookmark"></i>
      </div>

      <p className="movie-infobar">
        <span className="movie-infobar__runtime">{`${runtime}min`}</span>

        {genres.map((genre, index) => {
          if (index !== genres.length - 1) {
            return <span key={genre.id}>{`${genre.name} / `}</span>;
          } else {
            return <span key={genre.id}>{genre.name}</span>;
          }
        })}
      </p>
    </StyledAboutMovie>
  );
};

AboutMovie.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
};

export default AboutMovie;
