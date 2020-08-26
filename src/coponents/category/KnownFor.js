import React from "react";
import { Link } from "react-router-dom";
import StyledKnownFor from "./styles/StyledKnownFor";
import Poster from "./Poster";

const KnownFor = ({ title, movies, posterSize }) => {
  return (
    movies && (
      <StyledKnownFor>
        <h2>{title}</h2>

        <div className="movies-list">
          {movies.map((movie) => {
            return (
              <div className="movie-list__item">
                <Link to={`${movie.media_type}/${movie.id}`}>
                  <Poster
                    posterSize={posterSize}
                    posterPatrh={movie.poster_path}
                  />
                  <div className="movie-list__info">
                    <p>{movie.title || movie.name}</p>
                    <p>{movie.character || movie.job}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </StyledKnownFor>
    )
  );
};

export default KnownFor;
