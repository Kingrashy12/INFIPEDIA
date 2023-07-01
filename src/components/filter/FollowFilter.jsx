import React from "react";
import {
  FilterClick,
  FollowFilterWrapper,
} from "../../styles/layout/followers/styledfollow.nav";
import { HeaderOne, Libography } from "../../libs";
import { FaPeopleArrows, FaPeopleCarry, FaUsers } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";

const FollowFilter = ({ setUser, setFollowers, setFollowing }) => {
  function u() {
    setUser(true);
    setFollowers(false);
    setFollowing(false);
  }
  function fer() {
    setUser(false);
    setFollowing(false);
    setFollowers(true);
  }
  function follow() {
    setUser(false);
    setFollowers(false);
    setFollowing(true);
  }
  return (
    <FollowFilterWrapper>
      <HeaderOne
        fontSemiBold
        fontSofia
        text="Infipedia"
        className="text-2xl text-center logo"
      />
      <hr />
      <FilterClick className="hover:bg-slate-200 p-2 rounded-md" onClick={u}>
        <Libography fontSemiBold fontSofia text="People" />
        <FaPeopleArrows
          className="text-green-600"
          size={25}
          title="People you may know"
        />
      </FilterClick>
      <FilterClick className="hover:bg-slate-200 p-2 rounded-md" onClick={fer}>
        <Libography fontSemiBold fontSofia text="Followers" />
        <FaUsers
          className="text-emerald-300"
          size={25}
          title="People following you"
        />
      </FilterClick>
      <FilterClick
        className="hover:bg-slate-200 p-2 rounded-md"
        onClick={follow}
      >
        <Libography fontSemiBold fontSofia text="Following" />
        <FaUsers
          className="text-lime-500"
          size={25}
          title="People you're following"
        />
      </FilterClick>
    </FollowFilterWrapper>
  );
};

export default FollowFilter;
