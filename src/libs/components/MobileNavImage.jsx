import React from "react";
import { StyledNavImage } from "../../styles/layout/navimage.styled";
import { Female, Male, PlaceholderImage } from "../../asset";

const MobileNavImage = ({ user, onClick }) => {
  return (
    <>
      {user?.uProfile ? (
        <StyledNavImage src={user.uProfile?.url} onClick={onClick} />
      ) : (
        <StyledNavImage src={PlaceholderImage} onClick={onClick} />
      )}
    </>
  );
};

export default MobileNavImage;
