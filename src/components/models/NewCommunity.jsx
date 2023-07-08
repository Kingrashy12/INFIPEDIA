import React, { useState } from "react";
import { BackDrop, HeaderOne, Popup } from "../../libs";
import { Backdrop } from "@mui/material";
import FormJS from "../community/FormJS";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewCommunity } from "../../store/communitySlice";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { useNewCModal } from "../../hooks";

const NewCommunity = ({ open, close }) => {
  const auth = useSelector((state) => state.credentails);
  const c = useSelector((state) => state.community.createStatus);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    cname: "",
    cprofile: "",
    cCover: "",
    cdesc: "",
    userId: auth?._id,
  });
  console.log("on state:", form);

  const newcommunity = useNewCModal();
  const isopen = newcommunity.isOpen;
  function Close() {
    newcommunity.onClose();
  }

  async function handleCreate(e) {
    dispatch(CreateNewCommunity(form));
    setTimeout(() => {
      Close();
    }, 5000);
    // setIsLoading(true);
    // try {
    //   await axios.post(`${BASE_URL}/community/new`, {
    //     userId: form.userId,
    //     uUsername: form.uUsername,
    //     uname: form.uname,
    //     uProfile: form.uProfile,
    //     cname: form.cname,
    //     cProfile: form.cProfile,
    //     cCover: form.cCover,
    //     cCat: form.cCat,
    //   });
    //   toast.success(`${form.cname} have been created`, {
    //     position: "top-center",
    //   });
    //   close();
    // } catch (error) {
    //   console.log({ error: error.message });
    //   toast.error(error.message, { position: "top-center" });
    // } finally {
    //   setIsLoading(false);
    // }
  }
  const body = (
    <div className="flex flex-col w-full justify-center items-center">
      <FormJS form={form} setForm={setForm} Submit={handleCreate} />
    </div>
  );
  return <>{isopen && <BackDrop children={body} />}</>;
};

export default NewCommunity;
