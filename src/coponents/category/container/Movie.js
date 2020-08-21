import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import TrailerPoster from "../TrailerPoster";
import { CategoryContext } from "../../../context/CategoryContext";
import { ConfigContext } from "../../../context/ConfigContext";

const Movie = (props) => {
  const { category, id } = useParams();

  const { data } = useContext(CategoryContext);
  const { config } = useContext(ConfigContext);
  const { backdrop_sizes, poster_sizes, profile_sizes, still_sizes } = config;

  console.log(data);
  // console.log(config);

  return (
    <div>
      {`/movie/${id}`}
     <TrailerPoster posterSize={backdrop_sizes[1]} filePath={data.backdrop_path} />

    </div>
  );
};

export default Movie;
