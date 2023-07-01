import styled from "styled-components";

const StyledDrop = styled.div`
  background: #fff;
  width: auto;
  padding: 9px;
  position: absolute;
  border-radius: 7px;
  right: 6px;
  top: 25px;
  display: flex;
  flex-direction: column;
`;

const StyledDropItem = styled.div`
  display: flex;
  gap: 6px;
  position: relative;
  align-items: center;
  cursor: pointer;
  padding: 6px;
  border-radius: 5px;
`;

export { StyledDrop, StyledDropItem };
