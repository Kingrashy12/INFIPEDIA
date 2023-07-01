import styled from "styled-components";

const CFilterWrapper = styled.nav`
  position: sticky;
  width: 100%;
  height: auto;
  background: #fff;
  top: -2px;
  z-index: 93;
`;

const CFilterContainer = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export { CFilterContainer, CFilterWrapper };
