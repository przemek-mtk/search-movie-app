import React, { useContext } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import StyledDetailedInfo from "./styles/StyledDetailedInfo";
import DetailedInfoVote from "./DetailedInfoVote";
import DetailedInfoMeta from "./DetailedInfoMeta";

const DetiledInfo = () => {
  const { data } = useContext(CategoryContext);
  const {
    budget,
    production_companies,
    revenue,
    status,
    vote_average,
    vote_count,
    created_by, //only in tv
    networks, //only in tv
    number_of_episodes, //only in tv
    number_of_seasons, //only in tv
  } = data;

  const getOnlyName = (array) => {
    return array && array
      .reduce((acc, occ) => {
        return [...acc, occ.name];
      }, [])
      .join(", ");
  };

  const studios = getOnlyName(production_companies);
  const createdBy = getOnlyName(created_by);
  const networksBy = getOnlyName(networks);

  return (
    <StyledDetailedInfo>
      <DetailedInfoVote average={vote_average} count={vote_count} />

      <ul>
        <DetailedInfoMeta label="status" data={status} />
        <DetailedInfoMeta label="budget" data={budget} unit="$" />
        <DetailedInfoMeta label="box office" data={revenue} unit="$" />
        <DetailedInfoMeta label="seasons" data={number_of_seasons} />
        <DetailedInfoMeta label="episodes" data={number_of_episodes} />
        <DetailedInfoMeta label="created by" data={createdBy} />
        <DetailedInfoMeta label="studio" data={studios} />
        <DetailedInfoMeta label="networks" data={networksBy} />
        {}
      </ul>
    </StyledDetailedInfo>
  );
};

export default DetiledInfo;
