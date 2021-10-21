import styled from "styled-components";
import ModalHeader from "../common/ModalHeader";
import CancelDetailList from "./CancelDetailList";
import CancelReason from "./CancelReason";
import CancelDecision from "./CancelDecision";
import CancelComment from "./CancelComment";

const PayCancelModal = () => {
  return (
    <>
      <ModalHeader>취소 항목 확인</ModalHeader>
      <main>
        <MainContainer>
          <CancelDetailList />
          <CancelReason />
          <CancelComment />
          <CancelDecision />
        </MainContainer>
      </main>
    </>
  );
};

export default PayCancelModal;

//styled-components
const MainContainer = styled.div`
  height: 380px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--defaultSidePadding);
`;
