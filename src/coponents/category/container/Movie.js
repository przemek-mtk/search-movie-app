import React, { useContext } from "react";
import TrailerPoster from "../TrailerPoster";
import { CategoryContext } from "../../../context/CategoryContext";
import { ConfigContext } from "../../../context/ConfigContext";
import About from "../About";
import Description from "../Description";
import DetailedInfo from "../DetailedInfo";
import Videos from "../Videos";
import Cast from "../Cast";
import Reviews from "../Reviews";
import AboutInfobar from "../AboutInfobar";
import { useVideoPlaylist } from "../../../hooks/useVideoPlaylist";

const Movie = (props) => {
  const [play, active, setPlay, setActive, playTrailer] = useVideoPlaylist();

  const { data } = useContext(CategoryContext);
  const { config } = useContext(ConfigContext);
  const { backdrop_sizes, poster_sizes, profile_sizes, still_sizes } = config;
  let {
    backdrop_path,
    poster_path,
    title,
    release_date,
    runtime,
    genres,
    overview,
    videos,
    credits,
    reviews,
  } = data;
  const trailers =
    videos && videos.results.filter((video) => video.type === "Trailer");
  const cast = credits && credits.cast;
  const notice = reviews && reviews.results.slice(0, 7);

  const playFirstMovie = () => {
    if (trailers.length > 0) playTrailer(trailers[0].key);
  };

  return (
    <section className="container">
      <TrailerPoster
        onClick={playFirstMovie}
        posterSize={backdrop_sizes[1]}
        filePath={backdrop_path}
        isVideo={!!trailers.length}
      />
      <About
        title={title}
        date={release_date}
        infobar={<AboutInfobar runtime={runtime} genres={genres} />}
      />
      <Description
        posterSize={poster_sizes[0]}
        posterPath={poster_path}
        overview={overview}
      />
      <DetailedInfo />
      <Videos
        isTrailer={trailers.length}
        play={play}
        active={active}
        playTrailer={playTrailer}
        setActive={setActive}
        setPlay={setPlay}
      />
      <Cast cast={cast} profileSizes={poster_sizes[0]} />
      <Reviews reviews={notice} />
    </section>
  );
};

export default Movie;
