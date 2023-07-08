import React from "react";
import { Male, PlaceholderImage } from "../../asset";
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
      <Span text={item?.members?.length} />
    </div>
  );

  // function join() {}

  function explore() {
    // dispatch(ExploreCommunity(slug));
    navigate(`/community/${item.slug}`);
  }
  return (
    <div className="flex flex-col bg-slate-200 h-auto w-44 shadow shadow-black relative rounded-lg z-0">
      <img
        src={item?.cprofile || PlaceholderImage}
        alt="Community"
        className="rounded-t-lg h-32 cursor-pointer"
        onClick={explore}
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
        {/* <Button text="Explore" outlined onClick={explore} /> */}
      </div>
    </div>
  );
};

export default CommunityItem;
