import React, { useState } from "react";

export const useVideoPlaylist = () => {
  const [play, setPlay] = useState(false);
  const [active, setActive] = useState(null);

  const playMovieTrailer = (id) => {
    setPlay((prev) => !prev);
    setActive(id);
  };

  return [play, active, setPlay, setActive, playMovieTrailer];
};
