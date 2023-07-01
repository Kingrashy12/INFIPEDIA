import styled from "styled-components";

const StyledViewedPostCommentSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  gap: 1rem;
`;

const StyledViewedPostCommentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const StyledViewdCommentsForm = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  gap: 9px;
  border-radius: 5px;
`;

const ViwedCommentsFormImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const ViewedPostCommetsFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 9px;
  gap: 1rem;
  font-weight: 600;
  font-family: "Sofia Sans Semi Condensed", sans-serif;
`;

export {
  StyledViewedPostCommentSection,
  StyledViewedPostCommentSectionContainer,
  StyledViewdCommentsForm,
  ViwedCommentsFormImg,
  ViewedPostCommetsFlexBox,
};
