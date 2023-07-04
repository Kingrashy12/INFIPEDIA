import React, { useState } from "react";
import { Backdrop, TextField } from "@mui/material";
import { useEditEmailModal } from "../../hooks";
import { BackDrop, Button, Libography } from "../../libs";
import {
  StyledEditDetails,
  StyledMailEdit,
} from "../../styles/components/models/edit.styled";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Updatedemail } from "../../hooks/getUserById";
import { UpdateEmail } from "../../store/authSlice";

const EditEmailModal = () => {
  const user = useSelector((state) => state.credentails);
  const dispatch = useDispatch();
  const userId = user?._id;
  const isLoading = user.emailupdatedStatus === "pending";
  //   const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: user?.email,
    userId: userId,
  });
  const emailmodal = useEditEmailModal();

  const Close = () => {
    emailmodal.onClose();
  };
  async function updateEmail() {
    //   setIsLoading(true);
    dispatch(UpdateEmail(data, userId));
    // await Updatedemail(data, userId);
    // setIsLoading(false);
  }

  const child = (
    <StyledMailEdit>
      <div className="flex justify-between w-full p-[1rem]">
        <Libography fontSofia text="Edit Email" className="text-[22px]" />
        <IoClose
          size={30}
          className="cursor-pointer p-1 bg-neutral-400 rounded-full"
          onClick={Close}
        />
      </div>
      <hr />
      <StyledEditDetails>
        <Libography
          text="You'll be logged out and asked to log in again"
          className="text-neutral-500"
          fontPoppins
          fontMedium
        />
        <TextField
          label="Email"
          value={data.email}
          sx={{ fontFamily: "'Sofia Sans Semi Condensed', sans-serif;" }}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <div className="flex w-full h-full relative items-end">
          <Button
            isCurrentBg
            text="Save"
            className="items-end"
            fullWidth
            disabled={!data.email || isLoading}
            isLoading={isLoading}
            onClick={updateEmail}
          />
        </div>
      </StyledEditDetails>
    </StyledMailEdit>
  );

  return <>{emailmodal.isOpen && <BackDrop children={child} />}</>;
};

export default EditEmailModal;
