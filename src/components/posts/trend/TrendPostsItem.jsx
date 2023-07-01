import React from "react";
import { Libography, TruncatedText } from "../../../libs";
import { useNavigate } from "react-router-dom";

const TrendPostsItem = ({ trend }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col relative w-full cursor-pointer hover:bg-slate-300 p-[1rem]"
      onClick={() => navigate(`/${trend.username}/status/${trend._id}`)}
    >
      <TruncatedText maxLength={60} fontSemiBold fontSofia text={trend.body} />
      <Libography
        fontSofia
        text={`${trend.likes.length} likes`}
        className="text-xs"
      />
    </div>
  );
};

export default TrendPostsItem;
