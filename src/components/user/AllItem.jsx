import React, { useState } from "react";
import { Button, HeaderOne } from "../../libs";
import { Male } from "../../asset";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { followUser } from "../../hooks/getUserById";
import { ItemContainer } from "../../styles/components/user/all.styled";

const AllItem = ({ user, isLoading }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.credentails);
  const profileId = auth?._id;
  const isfollowing = user.followers?.includes(profileId);
  const dispatch = useDispatch();
  const [Follow, setFollow] = useState(false);
  const followId = user._id;
  // const uId = profileId;

  async function follow() {
    if (!auth?._id) {
      navigate("/auth/login");
    } else {
      setFollow(true);
      try {
        await followUser(followId, profileId);
      } catch (error) {
        console.log({ error: error.message });
        toast.error(error.message, { position: "top-center" });
      } finally {
        setFollow(false);
      }
    }
  }

  return (
    <ItemContainer className="shadow shadow-black">
      <img
        src={user?.userProfile?.url || Male}
        alt="Community"
        className="rounded-t-lg h-32"
      />
      <div className="flex flex-col p-2 gap-3 rounded-b-lg">
        <HeaderOne
          fontSemiBold
          fontSofia
          text={user?.name}
          isLoading={isLoading}
          loadingWidth={`150px`}
          loadingHeight={`50px`}
          className="text-base"
        />

        <Button
          text={isfollowing ? "Unfollow" : "Follow"}
          secondary
          onClick={follow}
          isLoading={Follow}
          disabled={Follow}
        />
        <Button
          text="View Profile"
          outlined
          onClick={() => navigate(`/${user.username}`)}
        />
      </div>
    </ItemContainer>
  );
};

export default AllItem;
