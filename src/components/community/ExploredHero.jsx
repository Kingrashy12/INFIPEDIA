import React from "react";
import {
  ExploredCover,
  ExploredProfile,
} from "../../styles/components/community/explored.styled";
import { Male, PlaceholderImage } from "../../asset";
import { Skeleton } from "@mui/material";

const ExploredHero = ({ data, isLoading }) => {
  return (
    <div className="flex flex-col relative">
      {isLoading ? (
        <Skeleton variant="rectangular" width={`100%`} height={`30rem`} />
      ) : (
        <ExploredCover
          src={data?.ccover || PlaceholderImage}
          alt="Community Cover"
        />
      )}
      {isLoading ? (
        <Skeleton
          variant="circular"
          width="150px"
          height="150px"
          sx={{ bottom: "-2.3rem", position: "absolute", left: "4rem" }}
        />
      ) : (
        <ExploredProfile
          src={data?.cprofile || PlaceholderImage}
          alt="Community Profile"
        />
      )}
    </div>
  );
};

export default ExploredHero;
