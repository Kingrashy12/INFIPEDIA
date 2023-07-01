import styled from "styled-components";

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin-top: 1rem; */
  position: relative;
  height: auto;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    font-size: 1.5rem;
  }
  svg {
    font-size: 2rem;
  }
`;

const StyledItemsFilter = styled.nav`
  width: 100%;
  position: fixed;
  margin-top: 3.5rem;
  height: 5rem;
  background: #fff;
  z-index: 92;

  @media screen and (max-width: 700px) {
    height: 4.5rem;
    top: ${({ scroll }) => (scroll === "down" ? "-55px" : "-15px")};
  }
`;

const StyledItemsFilterNav = styled.div`
  position: relative;
  padding: 5px;
  height: 100;
  width: 100%;
  padding: 1rem;
`;

const ItemsSearch = styled.input`
  width: 400px;
  padding: 10px;
  border-radius: 12px;

  @media screen and (max-width: 700px) {
    width: 350px;
    border-radius: 6px;
  }
`;

const ItemFeedWrap = styled.div`
  @media screen and (max-width: 700px) {
    margin-top: 5rem;
    margin-left: 3px;
  }
  @media screen and (max-width: 412px) {
    margin-left: 15px;
  }
  @media screen and (max-width: 390px) {
    margin-left: 3px;
  }
`;

export {
  FeedWrapper,
  StyledItemsFilter,
  StyledItemsFilterNav,
  ItemsSearch,
  ItemFeedWrap,
};
