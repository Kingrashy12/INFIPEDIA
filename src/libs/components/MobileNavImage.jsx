import React from "react";
import { StyledNavImage } from "../../styles/layout/navimage.styled";
import { Female, Male, PlaceholderImage } from "../../asset";

const MobileNavImage = ({ user, onClick }) => {
  return (
    <>
      {user?.userProfile ? (
        <StyledNavImage src={user.userProfile.url} onClick={onClick} />
      ) : (
        <StyledNavImage src={PlaceholderImage} onClick={onClick} />
      )}
    </>
  );
};

export default MobileNavImage;
