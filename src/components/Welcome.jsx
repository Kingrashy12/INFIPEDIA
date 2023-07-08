import React from "react";
import { StyledWelcome } from "../styles/components/welcome";
import { Button, HeaderOne } from "../libs";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <StyledWelcome>
      <HeaderOne fontSofia text="Welcome to infipedia" />

      <div className="flex gap-[1rem]">
        <Button
          text="Login"
          isCurrentBg
          onClick={() => navigate("/auth/login")}
        />
        <Button
          text="Sign up"
          isCurrentBgOutlined
          onClick={() => navigate("/auth/signup")}
        />
      </div>
    </StyledWelcome>
  );
};

export default Welcome;
