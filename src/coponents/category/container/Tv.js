import React from "react";
import { useParams } from "react-router-dom";

const Tv = (props) => {
  const { category, id } = useParams();
  

  return (
    <div>
     {`/tv/${id}`}
    </div>
  );
};

export default Tv;
