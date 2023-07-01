import styled from "styled-components";

const StyledUsersNav = styled.nav`
  position: relative;
  width: 400px;
  height: auto;
  padding: 0;
  margin-top: 1rem;

  @media screen and (max-width: 1024px) {
    width: 100px;
  }
`;

const UsersNavLayout = styled.div`
  position: fixed;
  background: #fff;
  height: 100%;
  width: 400px;

  @media screen and (max-width: 1024px) {
    width: 100px;
  }
`;

const FollowFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  margin-top: 4rem;
  padding: 2rem;
`;

const FilterClick = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.2rem;
  position: relative;
  align-items: center;
`;
export { StyledUsersNav, UsersNavLayout, FollowFilterWrapper, FilterClick };
