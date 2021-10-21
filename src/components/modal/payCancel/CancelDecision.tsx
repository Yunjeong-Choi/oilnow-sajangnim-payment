import styled from "styled-components";
import { SquareButton } from "../../common/Buttons";

const CancelDecision = () => {
  return (
    <DecisionBox>
      <ReturnButton>돌아가기</ReturnButton>
      <CancelConfirmBtn>취소확정</CancelConfirmBtn>
    </DecisionBox>
  );
};

export default CancelDecision;

//styled-components
const DecisionBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-item: center;
`;

const ReturnButton = styled(SquareButton)`
  width: 150px;
  height: 35px;
  background: var(--darkGray);
  border: none;

  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`;

const CancelConfirmBtn = styled(ReturnButton)`
  background: var(--red);
`;
