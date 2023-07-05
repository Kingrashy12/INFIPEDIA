import { Backdrop } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { HeaderOne, Libography, Popup } from "../../libs";
import { useDispatch, useSelector } from "react-redux";
import { FaFileImage } from "react-icons/fa";
import { registerUser } from "../../store/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input } from "@mui/joy";
import { ClipLoader } from "react-spinners";

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
    <div className="flex flex-col relative gap-4 w-full items-center p-2">
      <HeaderOne fontSofia text="Register an account" className="text-[23px]" />
      <FormControl required sx={{ width: "100%" }}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={user.name}
          className="w-full"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </FormControl>
      <FormControl required sx={{ width: "100%" }}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          name="username"
          value={user.username}
          className="w-full"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </FormControl>
      <FormControl required sx={{ width: "100%" }}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={user.email}
          className="w-full"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </FormControl>
      <FormControl required sx={{ width: "100%" }}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </FormControl>
      <Libography
        text=" Don't have an account? Login"
        className="font-semibold font-sofia cursor-pointer text-blue-600 hover:underline"
        onClick={() => navigate("/auth/login")}
      />

      <Button
        onClick={handleSubmit}
        disabled={!user.email || !user.password}
        className="bg-blue-600 disabled:cursor-not-allowed w-full"
      >
        {auth.loginStatus === "pending" ? <ClipLoader size={23} /> : "Register"}
      </Button>
    </div>
  );

  return (
    <Backdrop open={open}>
      <Popup
        isWhite
        // header="Register"
        open={open}
        body={body}
        // actionLabel="Register"
        onClose={close}
        onFormSubmit={handleSubmit}
        isLoading={isLoading}
        disabled={isLoading || !user.email || user.password.length < 4}
        onClick={handleNext}
        hideBtn
      />
    </Backdrop>
  );
};

export default RegisterModel;
