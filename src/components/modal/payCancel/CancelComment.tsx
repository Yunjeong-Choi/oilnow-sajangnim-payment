import styled from "styled-components";
import H2Title from "../../common/H2Title";

const CancelComment = () => {
  return (
    <CommentBox>
      <H2Title>상세사유</H2Title>
      <CommentDetail>
        <img src="#" alt="#"></img>
        <CommentText></CommentText>
      </CommentDetail>
    </CommentBox>
  );
};

export default CancelComment;

//styled-components
const CommentBox = styled.div`
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: top;
  padding-right: 15px;
`;

const CommentDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CommentText = styled.div`
  height: 70px;
  width: 250px;
  border: 1px solid var(--gray);
  border-radius: 4px;
`;
