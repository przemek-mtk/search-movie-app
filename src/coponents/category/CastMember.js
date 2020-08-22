import React from "react";
import PropTypes from "prop-types";
import StyledCastMember from "./styles/StyledCastMember";
import Poster from "./Poster";

const CastMember = ({ person, profileSizes }) => {
  return (
    <StyledCastMember>
      <Poster posterSize={profileSizes} posterPatrh={person.profile_path} />
      <div className="cast-member__info">
        <p>{person.name}</p>
        <p>{person.character}</p>
      </div>
    </StyledCastMember>
  );
};

CastMember.propTypes = {
  person: PropTypes.object,
  profileSizes: PropTypes.string.isRequired,
};

export default CastMember;
