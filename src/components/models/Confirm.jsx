import React, { useState } from "react";
import {
  ConfirmInput,
  StyledConfirm,
} from "../../styles/components/models/confirm";
import { Button, HeaderOne, Libography } from "../../libs";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAccount } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Confirm = ({ setOpen }) => {
  const userId = useSelector((state) => state.credentails._id);
  const load = useSelector((state) => state.credentails.deleteStatus);
  const navigate = useNavigate();
  const loading = load === "pending";
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  function Confirmdelete() {
    if (text !== "delete my account") {
      console.log("not valid");
      toast.error("Invalid confirmation", { position: "top-center" });
      toast.info("delete my account required on input", {
        position: "top-center",
      });
    } else {
      try {
        dispatch(deleteUserAccount(userId));
        toast.success("Your account have been deleted", {
          position: "top-center",
        });
        setOpen(false);
      } catch (error) {
        toast.error(error.message, { position: "top-center" });
      } finally {
        navigate("/");
      }
    }
  }
  return (
    <StyledConfirm>
      <div className="flex justify-between">
        <HeaderOne fontSofia text="Confirm" />
        <IoClose
          className="p-1 bg-neutral-300 rounded-full cursor-pointer"
          size={30}
          onClick={() => setOpen(false)}
        />
      </div>
      <hr />
      <Libography
        fontSofia
        text={"You're about to delete your account type in 'delete my account'"}
      />
      <ConfirmInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="font-sofia"
        placeholder="Enter Confirmation"
      />
      <Button
        isCurrentBg
        text="Confirm"
        onClick={Confirmdelete}
        isLoading={loading}
        disabled={loading || !text}
      />
    </StyledConfirm>
  );
};

export default Confirm;
