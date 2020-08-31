import React, { useContext } from "react";
import { CategoryContext } from "../../../context/CategoryContext";
import { ConfigContext } from "../../../context/ConfigContext";
import TrailerPoster from "../TrailerPoster";
import About from "../About";
import Description from "../Description";
import DetailedInfo from "../DetailedInfo";
import Videos from "../Videos";
import Cast from "../Cast";
import Reviews from "../Reviews";
import AboutInfobar from "../AboutInfobar";

const Tv = (props) => {
  const { data } = useContext(CategoryContext);
  const { config } = useContext(ConfigContext);
  let {
    backdrop_path,
    videos,
    name,
    first_air_date,
    last_air_date,
    episode_run_time,
    genres,
    poster_path,
    overview,
    images,
    credits,
    reviews,
  } = data;
  const { backdrop_sizes, poster_sizes, profile_sizes, still_sizes } = config;
  const trailers =
    videos && videos.results.filter((video) => video.type === "Trailer");
  const cast = credits && credits.cast;
  const notice = reviews && reviews.results.slice(0, 7);

  return (
    <section>
      <TrailerPoster
        posterSize={backdrop_sizes[1]}
        filePath={backdrop_path}
        isVideo={!!trailers.length}
      />
      <About
        title={name}
        date={first_air_date}
        lastData={last_air_date}
        infobar={<AboutInfobar runtime={episode_run_time[0]} genres={genres} />}
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
      <Reviews reviews={notice} />
    </section>
  );
};

export default Tv;
