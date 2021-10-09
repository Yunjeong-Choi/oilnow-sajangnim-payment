import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import * as payDatabase from "../../../database/payDatabase.json";
import { SquareButton } from "../../common/Buttons";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStore";
import { isOpen } from "../../../features/paySlice";

const dataList = payDatabase.dataList;

interface ListItemProps {
  curIndex: number;
}

const ListItem: FunctionComponent<ListItemProps> = (props) => {
  const { curIndex } = props;
  const curData = dataList[curIndex];
  const dispatch = useAppDispatch();
  const { isDetailOpen, openedRowIndex } = useAppSelector((state) => state.pay);

  //TODO:  dispatch 오류
  const handleDetail = () => dispatch(isOpen(curIndex));

  //TODO: 영문 한국어로 대치하는 방법
  //TODO: 첫글자 대문자로 변형 방지
  return (
    <ItemBox>
      <BasicInfo>
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
      </BasicInfo>
      {isDetailOpen && openedRowIndex === curIndex && (
        <DetailInfo>
          <DetailTextBox>
            <div>상세내역</div>
            <PayDetail>{curData.payDetail}</PayDetail>
          </DetailTextBox>
          <CancelButton>결제취소</CancelButton>
        </DetailInfo>
      )}
    </ItemBox>
  );
};

//∨∧▲▼
//TODO: DetailInfo 위아래 구분선 넣고 간격조정

export default ListItem;

//styled-components

const ItemBox = styled.div`
  font-size: 14px;

  display: flex;
  flex-direction: column;
`;

const BasicInfo = styled.div`
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

const DetailInfo = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 5px 70px 5px 80px;
`;

const DetailTextBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 5px;
`;

const PayDetail = styled.div`
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const CancelButton = styled(SquareButton)`
  border: 1px solid var(--red);

  color: var(--red);
`;

//TODO: body랑 container의 상하관계가 뭐였지?
