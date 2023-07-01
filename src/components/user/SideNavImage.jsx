import React from "react";
import { SideUserImage } from "../../styles/layout/SideNav.styled";
import { Female, Male } from "../../asset";

const SideNavImage = ({ user }) => {
  return (
    <>
      {user?.userProfile ? (
        <SideUserImage src={user.userProfile} />
      ) : (
        <SideNavImage src={user?.gender === "male" ? Male : Female} />
      )}
    </>
  );
};

export default SideNavImage;
