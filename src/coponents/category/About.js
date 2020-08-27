import React, { useContext } from "react";
import StyledAbout from "./styles/StyledAbout";
import { CategoryContext } from "../../context/CategoryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark } from "@fortawesome/fontawesome-free-solid";
import { faBookmark as farBookmark } from "@fortawesome/fontawesome-free-regular";
import Title from "../Title";

import PropTypes from "prop-types";

const About = ({ title, date, lastDate, infobar }) => {
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
        <Title title={title} date={date} lastDate={lastDate} />
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
