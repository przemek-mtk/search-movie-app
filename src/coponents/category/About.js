import React, { useState, useContext } from "react";
import StyledAbout from "./styles/StyledAbout";
import { CategoryContext } from "../../context/CategoryContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as fasBookmark } from "@fortawesome/fontawesome-free-solid";
import { faBookmark as farBookmark } from "@fortawesome/fontawesome-free-regular";
import Title from "../Title";
import PopupBox from "./PopupBox"
import PropTypes from "prop-types";

const About = ({ title, date, lastDate, infobar }) => {
  const { data, match } = useContext(CategoryContext);
  const { category, id } = match.params;

  const [isSaved, setSaved] = useState(() => {
    const movies = JSON.parse(window.localStorage.getItem(`${category}`)) || [];
    const searchedItem = movies.find((movie) => movie.id === Number(id));

    return searchedItem ? true : false;
  });
  const [actionArray, setActionArray] = useState([]);

  const toggleDataInLocalStorage = () => {
    let movies = JSON.parse(window.localStorage.getItem(`${category}`)) || [];

    if (isSaved) {
      const index = movies.findIndex((movie) => movie.id === data.id);
      movies.splice(index, 1);
    } else {
      movies.unshift(data);
    }

    window.localStorage.setItem(`${category}`, JSON.stringify(movies));
    setSaved((prev) => !prev);
  };

  const deleteElement = () => {
    const copyActionArr = [...actionArray];
    copyActionArr.shift();
    setActionArray(copyActionArr);
  };

  const addPopup = () => {
    let currentAction = [...actionArray];
    const message = isSaved
      ? "Unsaved successfully"
      : "Saved successfully";

    currentAction.push({ message, time: Date.now() });
    setActionArray(currentAction);
  };

  return (
    <StyledAbout>
      <div className="movie-header">
        <Title title={title} date={date} lastDate={lastDate} />
        <div
          className="save"
          onClick={() => {
            toggleDataInLocalStorage();
            addPopup();
          }}
        >
          <FontAwesomeIcon icon={isSaved ? fasBookmark : farBookmark} />
        </div>
      </div>

      {infobar}

      <PopupBox actionArray={actionArray} deleteElement={deleteElement} />
    </StyledAbout>
  );
};


About.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  lastDate: PropTypes.string,
  infobar: PropTypes.element,
};

export default About;
