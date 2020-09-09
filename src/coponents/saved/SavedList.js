import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StyledSavedList from "./styles/StyledSavedList";
import SavedItem from "./SavedItem";

const Saved = (props) => {
  const { type } = useParams();

  const [savedList, setSavedList] = useState(() => {
    const localData = window.localStorage.getItem(type);
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    window.localStorage.setItem(type, JSON.stringify(savedList));
  }, [savedList]);

  useEffect(() => {
    let localData = window.localStorage.getItem(type);
    let data = localData ? JSON.parse(localData) : [];
    setSavedList(data);
  }, [type]);

  const removeItemFromSavedList = (id) => {
    const index = savedList.findIndex((item) => item.id === id);
    let list = [...savedList];
    list.splice(index, 1);
    setSavedList(list);
  };

  return (
    <StyledSavedList>
      {savedList.length ? (
        savedList.map((item) => (
          <SavedItem
            key={item.id}
            item={item}
            removeItem={removeItemFromSavedList}
            type={type}
          />
        ))
      ) : (
        <p className="empty">Nothig here</p>
      )}
    </StyledSavedList>
  );
};

export default Saved;
