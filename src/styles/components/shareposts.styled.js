import styled from "styled-components";

const SharePostsWrap = styled.div`
  background: #fff;
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: 96%;
  border-radius: 9px;
  gap: 5px;
  padding: 6px;
`;
const InFoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShareImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const ShareInput = styled.input`
  width: 85%;
  padding: 8px;
  border-radius: 8px;
  outline: none;
`;

export { SharePostsWrap, InFoWrapper, ShareImg, ShareInput };
