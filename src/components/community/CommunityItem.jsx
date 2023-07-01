import React from "react";
import { Male } from "../../asset";
import { Button, HeaderOne, Libography, Span } from "../../libs";
import { useDispatch } from "react-redux";
import { ExploreCommunity } from "../../store/communitySlice";
import { useNavigate } from "react-router-dom";

const CommunityItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mem = (
    <div className="flex gap-1">
      <Libography text="Members:" />
      <Span text="12" />
    </div>
  );

  const id = item.cid;

  function explore() {
    dispatch(ExploreCommunity(id));
    navigate(`/community/${item.cid}`);
  }
  return (
    <div className="flex flex-col bg-slate-200 h-auto w-44 shadow shadow-black relative rounded-lg z-0">
      <img
        src={item?.cProfile || Male}
        alt="Community"
        className="rounded-t-lg h-32"
      />
      <div className="flex flex-col bg-white p-2 gap-3 rounded-b-lg">
        <HeaderOne
          fontSemiBold
          fontSofia
          text={item.cname}
          className="text-base"
        />
        <Libography
          fontSemiBold
          fontSofia
          className="text-xs text-neutral-400"
          text={item?.cdesc}
        />
        <Libography fontSemiBold fontShareMono className="text-sm" text={mem} />
        <Button text="Join" secondary />
        <Button text="Explore" outlined onClick={explore} />
      </div>
    </div>
  );
};

export default CommunityItem;
