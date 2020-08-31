import React, { useContext } from "react";
import PropTypes from "prop-types";
import StyledCastMember from "./styles/StyledCastMember";
import Poster from "../Poster";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context/CategoryContext";

const CastMember = ({ person, profileSizes }) => {
  const { dispatch } = useContext(CategoryContext);

  return (
    <StyledCastMember>
      <Link
        to={`/person/${person.id}`}
        onClick={() => dispatch({ type: "LOAD_DATA" })}
      >
        <Poster posterSize={profileSizes} posterPath={person.profile_path} />
        <div className="cast-member__info">
          <p>{person.name}</p>
          <p>{person.character}</p>
        </div>
      </Link>
    </StyledCastMember>
  );
};

CastMember.propTypes = {
  person: PropTypes.object,
  profileSizes: PropTypes.string.isRequired,
};

export default CastMember;
