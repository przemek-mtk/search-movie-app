import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CategoryContext } from "../../../context/CategoryContext";
import { ConfigContext } from "../../../context/ConfigContext";
import About from "../About";
import Description from "../Description";
import KnownFor from "../KnownFor";
import AboutPersonInfobar from "../AboutPersonInfobar";

const Perosn = (props) => {
  const { category, id } = useParams();
  const { data } = useContext(CategoryContext);
  const { config } = useContext(ConfigContext);
  const {
    name,
    birthday,
    deathday,
    biography,
    known_for_department,
    profile_path,
    place_of_birth,
    combined_credits,
  } = data;
  const { backdrop_sizes, poster_sizes, profile_sizes, still_sizes } = config;
  const propsPersonInfobar = {
    known_for_department,
    birthday,
    place_of_birth,
    deathday,
  };

  const { cast, crew } = combined_credits;

  return (
    <div>
      <About
        title={name}
        date={birthday}
        lastData={deathday}
        infobar={<AboutPersonInfobar {...propsPersonInfobar} />}
      />
      <Description
        posterSize={poster_sizes[0]}
        posterPatrh={profile_path}
        overview={biography}
      />

      <KnownFor title="Cast" movies={cast} posterSize={poster_sizes[0]} />
      <KnownFor title="Crew" movies={crew} posterSize={poster_sizes[0]} />
    </div>
  );
};

export default Perosn;
