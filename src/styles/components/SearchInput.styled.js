import styled from "styled-components";

const StyledSearch = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 15rem;
    height: 2rem;

    svg {
      background: none;
      display: block;
      padding: 0;
      width: 2rem;
      font-size: 2rem;
      size: 2rem;
    }
  }
  @media (max-width: 360px) {
    width: 13rem;
  }
  @media (max-width: 350px) {
    width: 12rem;
  }
`;

const StyledSearchImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;

  @media screen and (max-width: 700px) {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;

const SearchResultP = styled.p`
  font-size: 20px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    text-overflow: ellipsis;
  }
`;

const ResultContainer = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  padding: 12px;
  top: 20px;
  border-radius: 8px;
  background: #fff;

  @media screen and (max-width: 700px) {
    padding: 1px;
    > div {
      margin-top: 6px;
    }
  }
`;

export { StyledSearch, StyledSearchImg, SearchResultP, ResultContainer };
