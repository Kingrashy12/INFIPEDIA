import { Backdrop } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ImageUploadJs, Input, PasswordInput, Popup } from "../../libs";
import { useDispatch, useSelector } from "react-redux";
import { FaFileImage } from "react-icons/fa";
import { registerUser } from "../../store/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterModel = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const path = useLocation();
  const navigate = useNavigate();
  function close() {
    navigate("/");
  }
  function openNext() {
    navigate("/auth/login");
  }
  const open = path.pathname === "/auth/signup";
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.credentails);
  const isLoading = auth.registerStatus === "pending";
  const imgRef = useRef();
  const [photo, setPhoto] = useState(null);
  const [openG, setOpenG] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    gender: "",
  });
  console.log("user", user);

  useEffect(() => {
    if (auth.registerStatus === "success") {
      close();
    }
  });

  function handleSubmit() {
    dispatch(registerUser(user));
  }
  function handleNext() {
    if (isLoading) return null;
    // close();
    openNext();
  }

  const body = (
    <div className="flex flex-col relative gap-4 w-full p-2 items-center">
      <input
        type="text"
        className="p-3 rounded-lg focus:border-sky-500 font-semibold focus:border-2 outline-none w-full"
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        className="p-3 rounded-lg focus:border-sky-500 font-semibold focus:border-2 outline-none w-full"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <Input
        type="email"
        value={user.email}
        required={user.email}
        className="w-full"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <PasswordInput
        required={user.password}
        value={user.password}
        placeholder="Passowrd"
        className="w-full"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <div
        className={`p-2 ${
          openG ? "" : "bg-white"
        } w-full rounded-md outline-none cursor-pointer`}
        onClick={() => setOpenG(!openG)}
      >
        {openG ? (
          <div className="shadow shadow-black font-semibold font-sofia p-2 bg-white rounded-md cursor-pointer">
            <p onClick={() => setUser({ ...user, gender: "male" })}>Male</p>
            <hr />
            <p onClick={() => setUser({ ...user, gender: "female" })}>FeMale</p>
          </div>
        ) : (
          <option value="">
            {user.gender ? user.gender.toUpperCase() : "Gender"}
          </option>
        )}
      </div>
    </div>
  );

  const footer = (
    <p className="flex items-center gap-1 justify-center text-sky-300 font-sofia font-semibold cursor-pointer">
      Have an account?
      <span className="font-sofia font-semibold text-red-500 hover:underline">
        Login
      </span>
    </p>
  );

  return (
    <Backdrop open={open}>
      <Popup
        header="Register"
        open={open}
        body={body}
        actionLabel="Register"
        onClose={close}
        onFormSubmit={handleSubmit}
        isLoading={isLoading}
        disabled={isLoading || !user.email || user.password.length < 4}
        footer={footer}
        onClick={handleNext}
      />
    </Backdrop>
  );
};

export default RegisterModel;
