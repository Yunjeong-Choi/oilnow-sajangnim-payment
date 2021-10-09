import styled from "styled-components";
import ModalHeader from "../common/ModalHeader";
import CancelDetailList from "./CancelDetailList";

const PayCancelModal = () => {
  return (
    <>
      <ModalHeader>취소 항목 확인</ModalHeader>
      <main>
        <CancelDetailList />
        <CancelReason></CancelReason>
        <CancelButtons></CancelButtons>
      </main>
    </>
  );
};

export default PayCancelModal;

//styled-components

const CancelReason = styled.div`
  padding: var(--defaultSidePadding);
`;

const CancelButtons = styled.div`
  padding: var(--defaultSidePadding);
`;
