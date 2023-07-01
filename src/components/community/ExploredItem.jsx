import React from "react";
import { HeaderOne } from "../../libs";
import { StyledExplored } from "../../styles/components/community/explored.styled";
import ExploredHero from "./ExploredHero";
import ExploredBio from "./ExploredBio";
import ExploreSections from "./ExploreSections";

const ExploredItem = ({ data, isLoading }) => {
  return (
    <StyledExplored className="">
      <ExploredHero isLoading={isLoading} data={data} />
      <ExploredBio data={data} isLoading={isLoading} />
      <ExploreSections data={data} isLoading={isLoading} />
    </StyledExplored>
  );
};

export default ExploredItem;
