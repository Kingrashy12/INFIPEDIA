import React from "react";
import {
  ExploredCover,
  ExploredProfile,
} from "../../styles/components/community/explored.styled";
import { Male } from "../../asset";
import { Skeleton } from "@mui/material";

const ExploredHero = ({ data, isLoading }) => {
  return (
    <div className="flex flex-col relative">
      {isLoading ? (
        <Skeleton variant="rectangular" width={`100%`} height={`30rem`} />
      ) : (
        <ExploredCover src={data?.cCover || Male} alt="Community Cover" />
      )}
      {isLoading ? (
        <Skeleton
          variant="circular"
          width="150px"
          height="150px"
          sx={{ bottom: "-2.3rem", position: "absolute", left: "4rem" }}
        />
      ) : (
        <ExploredProfile src={data?.cProfile || Male} alt="Community Profile" />
      )}
    </div>
  );
};

export default ExploredHero;
