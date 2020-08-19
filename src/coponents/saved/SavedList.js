import React, { useState } from "react";
import { Link, Switch, Route, useParams } from "react-router-dom";

const Saved = (props) => {
  const { type } = useParams();
  const [savedList, setSavedList] = useState(() => {

      console.log(type);

    const localData = window.localStorage.getItem(type);
    return localData ? JSON.parse(localData) : [];
  });

 

  return (
    <div>
      {
        savedList.length ? (
          savedList.map(item => <div>jakiś tytuł</div>)
        ) : (<p>Nothig here</p>)
      }
    </div>
  );
};

export default Saved;
