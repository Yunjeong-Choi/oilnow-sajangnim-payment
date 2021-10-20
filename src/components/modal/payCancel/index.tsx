import styled from "styled-components";
import ModalHeader from "../common/ModalHeader";
import CancelDetailList from "./CancelDetailList";
import CancelReason from "./CancelReason";
import CancelDecision from "./CancelDecision";

const PayCancelModal = () => {
  return (
    <>
      <ModalHeader>취소 항목 확인</ModalHeader>
      <main>
        <MainContainer>
          <CancelDetailList />
          <CancelReason />
          <CancelDecision />
        </MainContainer>
      </main>
    </>
  );
};

export default PayCancelModal;

//styled-components
const MainContainer = styled.div`
  height: 270px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
