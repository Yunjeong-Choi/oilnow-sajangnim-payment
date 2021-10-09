import styled from "styled-components";
import ModalHeader from "../common/ModalHeader";
import CancelDetailList from "./CancelDetailList";
import CancelReason from "./CancelReason";
import CancelButtons from "./CancelButtons";

const PayCancelModal = () => {
  return (
    <>
      <ModalHeader>취소 항목 확인</ModalHeader>
      <main>
        <CancelDetailList />
        <CancelReason />
        <CancelButtons />
      </main>
    </>
  );
};

export default PayCancelModal;

//styled-components
