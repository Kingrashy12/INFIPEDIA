import React, { useState } from "react";
import {
  HeaderOne,
  Libography,
  Loader,
  PasswordInput,
  Popup,
} from "../../libs";
import { Backdrop, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input } from "@mui/joy";
import { ClipLoader } from "react-spinners";

const LoginModel = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function close() {
    navigate("/");
  }
  function openNext() {
    navigate("/auth/signup");
  }
  const auth = useSelector((state) => state.credentails);
  const isLoading = auth.loginStatus === "pending";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log("user details:", user);
  function handleLogin() {
    dispatch(loginUser(user));
    close();
  }
  function handleNext() {
    if (isLoading) return null;
    // close();
    openNext();
  }
  const open = path.pathname === "/auth/login";
  const body = (
    <div className="flex flex-col relative gap-4 w-full p-2">
      <HeaderOne
        fontSofia
        text="Login to your account"
        className="text-[23px]"
      />
      <FormControl required sx={{ width: "100%" }}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={user.name}
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
        text="New to infipedia? Register"
        className="font-semibold font-sofia cursor-pointer text-blue-600 hover:underline"
        onClick={() => navigate("/auth/signup")}
      />
      <Libography
        text={auth.loginError?.error || auth.loginError}
        className="font-semibold font-sofia cursor-pointer text-red-600"
      />
      <Button
        onClick={handleLogin}
        disabled={!user.email || !user.password || isLoading}
        className="bg-blue-600 disabled:cursor-not-allowed w-full"
      >
        {isLoading ? <ClipLoader size={23} /> : "Login"}
      </Button>
    </div>
  );

  return (
    <Backdrop open={open}>
      <Popup
        isWhite
        // header="Login"
        open={open}
        body={body}
        // actionLabel="Login"
        onClose={close}
        onFormSubmit={handleLogin}
        isLoading={isLoading}
        disabled={isLoading || !user.email || user.password.length < 4}
        // footer={footer}
        onClick={handleNext}
        hideBtn
      />
    </Backdrop>
  );
};

export default LoginModel;
