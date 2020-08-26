import React, { useContext } from "react";
import StyledAbout from "./styles/StyledAbout";
import { CategoryContext } from "../../context/CategoryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark } from "@fortawesome/fontawesome-free-solid";
import { faBookmark as farBookmark } from "@fortawesome/fontawesome-free-regular";

import PropTypes from "prop-types";

const About = ({ title, date, runtime, genres }) => {
  const year = new Date(date).getFullYear();
  const { data, isSaved, dispatch, match } = useContext(CategoryContext);
  const { category } = match.params;

  const toggleDataInLocalStorage = () => {
    let movies = JSON.parse(window.localStorage.getItem(`${category}`)) || [];
    let savedData = [...movies];

    if (isSaved) {
      const index = movies.findIndex((movie) => movie.id === data.id);
      savedData.splice(index, 1);
    } else {
      savedData.unshift(data);
    }

    window.localStorage.setItem(`${category}`, JSON.stringify(savedData));
    dispatch({ type: "TOGGLE_SAVE_DATA" });
  };

  return (
    <StyledAbout>
      <div className="movie-header">
        <h2 className="title">
          {title}
          <span>{` (${year})`}</span>
        </h2>
        <div className="save" onClick={toggleDataInLocalStorage}>
          <FontAwesomeIcon icon={isSaved ? fasBookmark : farBookmark} />
        </div>
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
    </StyledAbout>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired,
};

export default About;
