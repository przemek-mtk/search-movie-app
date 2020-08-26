import React from "react";
import PropTypes from "prop-types";

const AboutPersonInfobar = ({
  known_for_department,
  birthday,
  place_of_birth,
  deathday,
}) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const birthdayRepresentation = new Date(birthday).toLocaleDateString(
    "en-US",
    options
  );

  return (
    <div className="person-infobar">
      <span>{known_for_department}</span>
      <p>
        <span>
          <strong>born: </strong>
        </span>
        <span>{birthdayRepresentation} </span>
        {place_of_birth && <span>{`in ${place_of_birth}`}</span>}
      </p>
      {deathday && (
        <p>
          <span>
            <strong>died:</strong>
          </span>
          {deathday}
          <span></span>
        </p>
      )}
    </div>
  );
};

AboutPersonInfobar.propTypes = {
  known_for_department: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  place_of_birth: PropTypes.string.isRequired,
  deathday: PropTypes.string.isRequired,
};

export default AboutPersonInfobar;
