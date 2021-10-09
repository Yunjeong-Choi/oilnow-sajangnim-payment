import styled from "styled-components";
import { SquareButton } from "../../common/Buttons";

const CancelButtons = () => {
  return (
    <ButtonsBox>
      <ReturnButton>돌아가기</ReturnButton>
      <CancelConfirmBtn>취소확정</CancelConfirmBtn>
    </ButtonsBox>
  );
};

export default CancelButtons;

//styled-components
const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: var(--defaultSidePadding);
`;

const ReturnButton = styled(SquareButton)`
  width: 150px;
  height: 30px;
  background: var(--darkGray);
  border: none;

  color: #ffffff;
`;

const CancelConfirmBtn = styled(ReturnButton)`
  background: var(--red);
`;
