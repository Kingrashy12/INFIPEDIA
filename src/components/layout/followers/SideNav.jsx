import React from "react";
import {
  StyledUsersNav,
  UsersNavLayout,
} from "../../../styles/layout/followers/styledfollow.nav";
import FollowFilter from "../../filter/FollowFilter";

const SideNav = ({ setUser, setFollowers, setFollowing }) => {
  return (
    <StyledUsersNav>
      <UsersNavLayout className="border-r border-r-neutral-500 shadow shadow-black">
        <FollowFilter
          setFollowers={setFollowers}
          setUser={setUser}
          setFollowing={setFollowing}
        />
      </UsersNavLayout>
    </StyledUsersNav>
  );
};

export default SideNav;
