import styled from "styled-components";

const StyledShareForm = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  overflow-y: auto;
`;

const StyledShareImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
`;

export { StyledShareForm, StyledShareImg };
