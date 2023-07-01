import React from "react";
import styled from "styled-components";
import { HeaderOne } from "../../libs";
import { RxLapTimer } from "react-icons/rx";

const ComingSoon = () => {
  return (
    <ComingStles>
      <RxLapTimer className="text-neutral-400" size={40} />
      <HeaderOne fontSofia text="Coming soon" />
    </ComingStles>
  );
};

export default ComingSoon;

const ComingStles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  height: auto;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 1.4rem;
  }
`;
