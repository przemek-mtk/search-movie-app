import React, { useContext } from "react";
import { ConfigContext } from "../../context/ConfigContext";
import Poster from "../Poster";
import Title from "../Title";
import InfoVote from "../InfoVote";
import UnsaveBtn from "./UnsaveBtn";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SavedItem = ({ item, removeItem, type }) => {
  const { config } = useContext(ConfigContext);
  const {
    poster_path,
    profile_path,
    release_date,
    first_air_date,
    title,
    name,
    birthday,
    last_air_date,
    deathday,
    vote_average,
    vote_count,
    id,
  } = item;

  const { poster_sizes } = config;
  return (
    <div className="saved-list__item">
      <Poster
        posterSize={poster_sizes[0]}
        posterPath={poster_path || profile_path}
      />
      <div className="saved-list__describe">
        <Link to={`/${type}/${id}`}>
          <Title
            title={title || name}
            date={release_date || first_air_date || birthday}
            lastDate={last_air_date || deathday}
            saved
          />
        </Link>
        {type === "person" ? null : (
          <InfoVote average={vote_average} count={vote_count} />
        )}
      </div>
      <UnsaveBtn id={id} removeItem={removeItem} />
    </div>
  );
};

SavedItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SavedItem;
