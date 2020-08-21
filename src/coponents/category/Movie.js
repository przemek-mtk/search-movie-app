import React from "react";
import { useParams } from "react-router-dom";

const Movie = (props) => {
  const { category, id } = useParams();
  

  return (
    <div>
     {`/movie/${id}`}
    </div>
  );
};

export default Movie;
