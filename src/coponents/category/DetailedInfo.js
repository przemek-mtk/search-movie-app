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
  } = data;
  
  const studio = production_companies
    .reduce((acc, occ) => {
      return [...acc, occ.name];
    }, [])
    .join(", ");

  return (
    <StyledDetailedInfo>
      <DetailedInfoVote average={vote_average} count={vote_count} />

      <ul>
        <DetailedInfoMeta label="status" data={status} />
        <DetailedInfoMeta label="budget" data={`${budget}$`} />
        <DetailedInfoMeta label="box office" data={`${revenue}$`} />
        <DetailedInfoMeta label="studio" data={studio} />
      </ul>
    </StyledDetailedInfo>
  );
};

export default DetiledInfo;
