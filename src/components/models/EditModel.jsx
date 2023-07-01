import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { Popup } from "../../libs";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUser } from "../../store/authSlice";
import UpdatedForm from "../user/UpdatedForm";

const EditModel = ({ open, close }) => {
  const auth = useSelector((state) => state.credentails);
  const dispatch = useDispatch();
  const isLoading = auth.updatedStatus === "pending";
  const [user, setUser] = useState({
    id: auth?._id,
    name: auth.name,
    username: auth.username,
    bio: auth.bio,
  });
  console.log("on state:", user);
  function updated() {
    dispatch(UpdateUser(user));
    close();
  }

  const body = (
    <div className="flex flex-col w-full justify-center items-center">
      <UpdatedForm user={user} setUser={setUser} />
    </div>
  );
  return (
    <Backdrop open={open} sx={{ zIndex: 99 }}>
      <Popup
        actionLabel="Save"
        header="Updated Profile"
        onClose={close}
        body={body}
        onFormSubmit={updated}
        isLoading={isLoading}
      />
    </Backdrop>
  );
};

export default EditModel;
