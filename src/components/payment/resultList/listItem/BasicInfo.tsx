import { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useStore";
import { isOpen } from "../../../../features/paySlice";
import * as payDatabase from "../../../../database/payDatabase.json";
import styled from "styled-components";

// const koPayStatus = { paid: "결제완료", cancelRequest: "취소요청", cancelCompleted: "취소완료" }
// koPayStatus.{ curData.payStatus }
// //TODO: 이렇게 대치하고 싶은데 가능할까...
const dataList = payDatabase.dataList;

interface BasicInfoProps {
  curIndex: number;
}

const BasicInfo: FunctionComponent<BasicInfoProps> = (props) => {
  const { curIndex } = props;
  const curData = dataList[curIndex];
  const dispatch = useAppDispatch();
  const { isDetailOpen, openedRowIndex } = useAppSelector((state) => state.pay);

  const handleDetail = () => dispatch(isOpen(curIndex));

  return (
    <BasicBox>
      <PayStatus>{curData.payStatus}</PayStatus>
      <PayText>{curData.payDate}</PayText>
      <PayText>
        {curData.userID.length < 9
          ? curData.userID
          : curData.userID.slice(0, 6) + "..."}
      </PayText>
      <PayText>{curData.payPrice}</PayText>
      <DetailOpenBtn onClick={handleDetail}>
        {isDetailOpen && openedRowIndex === curIndex ? "접기▲" : "열기▼"}
      </DetailOpenBtn>
    </BasicBox>
  );
};

export default BasicInfo;

//styled-components
const BasicBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PayText = styled.div`
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PayStatus = styled(PayText)`
  box-sizing: border-box;
  border-radius: 18px;
  border: none;
  background: var(--lightGreen);

  font-size: 12px;

  padding: 7px 5px;
`;

const DetailOpenBtn = styled.button`
  width: 60px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;
