import React, { useContext } from "react";
import StyledAbout from "./styles/StyledAbout";
import { CategoryContext } from "../../context/CategoryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark } from "@fortawesome/fontawesome-free-solid";
import { faBookmark as farBookmark } from "@fortawesome/fontawesome-free-regular";

import PropTypes from "prop-types";

const About = ({ title, date, lastData, infobar }) => {
  const year = new Date(date).getFullYear();
  const lastYear = lastData ? new Date(lastData).getFullYear() : null; //only for tv
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
          {lastYear ? (
            <span>{` (${year}-${lastYear})`}</span>
          ) : (
            <span>{` (${year})`}</span>
          )}
        </h2>
        <div className="save" onClick={toggleDataInLocalStorage}>
          <FontAwesomeIcon icon={isSaved ? fasBookmark : farBookmark} />
        </div>
      </div>

      {infobar}
    </StyledAbout>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  lastAirData: PropTypes.string,
  infobar: PropTypes.element,
};

export default About;
