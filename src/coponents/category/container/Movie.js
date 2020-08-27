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

const Movie = (props) => {
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
    images,
  } = data;
  const trailers = videos.results.filter((video) => video.type === "Trailer");
  const cast = credits.cast;
  reviews = reviews.results.slice(0, 7);

  return (
    <section>
      <TrailerPoster
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
        videos={trailers}
        images={images.backdrops}
        posterSize={backdrop_sizes[0]}
      />
      <Cast cast={cast} profileSizes={poster_sizes[0]} />
      <Reviews reviews={reviews} />
    </section>
  );
};

export default Movie;
