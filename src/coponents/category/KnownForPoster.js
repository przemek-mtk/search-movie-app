import React, { useContext } from "react";
import Poster from "../Poster";
import { Link } from "react-router-dom";
import { ConfigContext } from "../../context/ConfigContext";
import PropTypes from "prop-types";
import { CategoryContext } from "../../context/CategoryContext";

const KnownForPoster = ({ movie }) => {
  const { dispatch } = useContext(CategoryContext);
  const { config } = useContext(ConfigContext);
  const { poster_sizes } = config;

  return (
    <div className="movie-list__item">
      <Link
        to={`/${movie.media_type}/${movie.id}`}
        onClick={() => dispatch({ type: "LOAD_DATA" })}
      >
        <Poster posterSize={poster_sizes[0]} posterPath={movie.poster_path} />
        <div className="movie-list__info">
          <p>{movie.title || movie.name}</p>
          <p>{movie.character || movie.job}</p>
        </div>
      </Link>
    </div>
  );
};

KnownForPoster.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default KnownForPoster;
