import styled from "styled-components";

const DropSearchWrapper = styled.div`
  position: relative;
  width: 55rem;

  @media (max-width: ${({ theme }) => theme.tab}) {
    width: 48rem;
  }
  @media (max-width: ${({ theme }) => theme.Minitab}) {
    width: 35rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ video }) => video && "none"};
  }
`;

export { DropSearchWrapper };
