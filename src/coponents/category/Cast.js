import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import StyledCast from "./styles/StyledCast";
import CastMember from "./CastMember";
import Spinner from "../Spinner";
import { ThemeContext } from "styled-components";

const Cast = ({ cast, profileSizes }) => {
  const [countVisibleCast, setCountVisibleCast] = useState(() => {
    return window.innerWidth > 699 ? 8 : 6;
  });
  const [updateCast, setUpdateCast] = useState(() => {
    return window.innerWidth > 699 ? 12 : 9;
  });
  const [visibleCast, setVisibleCast] = useState([]);
  const [loadingCast, setLoadingCast] = useState(true);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("resize", handleResizeScreen);

    return () => window.removeEventListener("resize", handleResizeScreen);
  }, []);

  useEffect(() => {
    setLoadingCast(true);
    setTimeout(() => {
      setVisibleCast(
        cast.slice(0, Math.min(countVisibleCast, cast.length - 1))
      );
      setLoadingCast(false);
    }, 500);
  }, [cast, countVisibleCast]);

  const handleLoadCast = () => {
    setCountVisibleCast((prev) => prev + updateCast);
  };

  const handleResizeScreen = (e) => {
    const width = window.innerWidth;
    if (width > 699) {
      setCountVisibleCast((prev) => {
        return Math.ceil(prev / 8) * 8;
      });
      setUpdateCast(12);
    } else {
      setCountVisibleCast((prev) => {
        return Math.floor(prev / 6) * 6;
      });
      setUpdateCast(9);
    }
  };

  return (
    !!cast.length && (
      <StyledCast>
        <h2>Cast</h2>

        <div className="cast-list">
          {visibleCast.map((person) => {
            return (
              <CastMember
                key={person.credit_id}
                person={person}
                profileSizes={profileSizes}
              />
            );
          })}

          <div className="cast-load">
            {loadingCast ? (
              <Spinner
                side={40}
                color={theme.primarySpinner}
                bg={theme.backgroundSpinner}
              />
            ) : (
              <button
                className="show-more"
                onClick={handleLoadCast}
                disabled={countVisibleCast >= cast.length - 1}
              >
                see more
              </button>
            )}
          </div>
        </div>
      </StyledCast>
    )
  );
};

Cast.propTypes = {
  cast: PropTypes.array,
  profileSizes: PropTypes.string.isRequired,
};

export default Cast;
