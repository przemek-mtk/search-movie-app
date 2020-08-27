import React, { useState, useEffect, useContext } from "react";
import { Link, Switch, Route, useParams } from "react-router-dom";
import StyledSavedList from "./styles/StyledSavedList"
import Poster from "../category/Poster";
import { ConfigContext } from "../../context/ConfigContext";
import Title from "../Title";
import InfoVote from "../InfoVote"
import UnsaveBtn from "./UnsaveBtn";

const Saved = (props) => {
  const { type } = useParams();
  const { config } = useContext(ConfigContext);
  const { poster_sizes } = config;
  const [savedList, setSavedList] = useState(() => {
    const localData = window.localStorage.getItem(type);
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    let localData = window.localStorage.getItem(type);
    let data = localData ? JSON.parse(localData) : [];
    setSavedList(data);
  }, [type]);

  return (
    <StyledSavedList>
      {savedList.length ? (
        savedList.map((item) => {
          console.log(item);

          return (
            <div className="saved-list__item">
              <Poster
                posterSize={poster_sizes[0]}
                posterPatrh={item.poster_path || item.profile_path}
              />
              <div className="saved-list__describe">

                <Title title={item.title || item.name} date={item.release_date || item.first_air_date || item.birthday} lastDate={item.last_air_date || item.deathday} saved/>
                {type === "person" ? null : <InfoVote average={item.vote_average} count={item.vote_count} />}
              </div>
              <UnsaveBtn />
            </div>
          );
        })
      ) : (
        <p>Nothig here</p>
      )}
    </StyledSavedList>
  );
};

export default Saved;
