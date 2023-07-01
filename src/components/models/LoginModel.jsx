import React, { useState } from "react";
import { Loader, PasswordInput, Popup } from "../../libs";
import { Backdrop, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

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
      <>
        <TextField
          label="Email"
          variant="outlined"
          value={user.email}
          error={!user.email || !user.email.includes("@")}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <TextField
          label="Password"
          variant="outlined"
          value={user.password}
          error={!user.password || user.password.length < 4}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </>
    </div>
  );

  const footer = (
    <p className="flex items-center gap-1 justify-center text-black font-sofia font-semibold cursor-pointer">
      New to Infipedia?
      <span className="font-sofia font-semibold text-red-500 hover:underline">
        Register
      </span>
    </p>
  );
  return (
    <Backdrop open={open}>
      <Popup
        isWhite
        header="Login"
        open={open}
        body={body}
        actionLabel="Login"
        onClose={close}
        onFormSubmit={handleLogin}
        isLoading={isLoading}
        disabled={isLoading || !user.email || user.password.length < 4}
        footer={footer}
        onClick={handleNext}
      />
    </Backdrop>
  );
};

export default LoginModel;
