import React, { useContext } from "react";
import { CategoryContext } from "../../../context/CategoryContext";
import { ConfigContext } from "../../../context/ConfigContext";
import About from "../About";
import Description from "../Description";
import KnownFor from "../KnownFor";
import AboutPersonInfobar from "../AboutPersonInfobar";

const Perosn = (props) => {
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
  const { poster_sizes } = config;
  const propsPersonInfobar = {
    known_for_department,
    birthday,
    place_of_birth,
    deathday,
  };

  const { cast, crew } = combined_credits;

  return (
    <section className="container">
      <About
        title={name}
        date={birthday}
        lastDate={deathday}
        infobar={<AboutPersonInfobar {...propsPersonInfobar} />}
      />
      <Description
        posterSize={poster_sizes[0]}
        posterPath={profile_path}
        overview={biography}
      />

      {cast && <KnownFor title="Cast" movies={cast} />}
      {crew && <KnownFor title="Crew" movies={crew} />}
    </section>
  );
};

export default Perosn;
