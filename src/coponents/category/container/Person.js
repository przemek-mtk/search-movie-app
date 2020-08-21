import React from "react";
import { useParams } from "react-router-dom";

const Perosn = (props) => {
  const { category, id } = useParams();
  

  return (
    <div>
     {`/person/${id}`}
    </div>
  );
};

export default Perosn;
