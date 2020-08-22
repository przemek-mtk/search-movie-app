import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TrailerPoster from "../TrailerPoster";
import { CategoryContext } from "../../../context/CategoryContext";
import { ConfigContext } from "../../../context/ConfigContext";
import AboutMovie from "../AboutMovie";
import Description from "../Description";
import DetailedInfo from "../DetailedInfo";

const Movie = (props) => {
  const { category, id } = useParams();

  const { data } = useContext(CategoryContext);
  const { config } = useContext(ConfigContext);
  const { backdrop_sizes, poster_sizes, profile_sizes, still_sizes } = config;
  const {backdrop_path, poster_path, title, release_date, runtime, genres,overview } = data;

  console.log(data);
  console.log(config);

  return (
    <div>
      {`/movie/${id}`}
      <TrailerPoster posterSize={backdrop_sizes[1]} filePath={backdrop_path} />
      <AboutMovie title={title} date={release_date} runtime={runtime} genres={genres} />
      <Description posterSize={poster_sizes[0]} posterPatrh={poster_path}  overview={overview}/>
      <DetailedInfo />
    </div>
  );
};

export default Movie;
