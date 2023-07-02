import React from "react";
import Libography from "./Texts/Libography";
import moment from "moment";
import { Skeleton } from "@mui/material";

const DateFormatter = ({ item, isLoading, loadingWidth, loadingHeight }) => {
  // const convertToHourFormat = () => {
  //   const createdAt = moment(item?.createdAt);
  //   const hourFormat = createdAt.format("h[h]");

  //   return hourFormat;
  // };
  const createdAt = new Date(item?.createdAt);
  const day = createdAt.getDate();
  const formattedTime = createdAt.toLocaleString("default", { month: "long" });
  return (
    <>
      {isLoading ? (
        <Skeleton variant="text" width={loadingWidth} height={loadingHeight} />
      ) : (
        <Libography
          // text={convertToHourFormat()}
          text={`${day} ${formattedTime}`}
          fontSemiBold
          fontSofia
          loadingWidth="100px"
          loadingHeight="25px"
          className="text-neutral-500 text-sm flex -translate-y-1"
        />
      )}
    </>
  );
};

export default DateFormatter;
