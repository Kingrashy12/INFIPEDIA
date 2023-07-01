import styled from "styled-components";

const MiddleFunBtn = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-content: center;
  height: 100%;
  gap: 1rem;
`;

const StyledPlayFunBtn = styled.div`
  display: flex;
  color: #f95f35;
  align-items: center;
  position: relative;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

const StyledBoxControll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

const StyledInnerControl = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 2rem;
`;

export {
  StyledPlayFunBtn,
  MiddleFunBtn,
  StyledBoxControll,
  StyledInnerControl,
};
