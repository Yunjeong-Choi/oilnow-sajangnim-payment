import { FunctionComponent } from "react";
import styled from "styled-components";
import * as payDatabase from "../../../database/payDatabase.json";

const dataList = payDatabase.dataList;

interface ListItemProps {
  index: number;
}

const ListItem: FunctionComponent<ListItemProps> = (props) => {
  const { index } = props;
  const curData = dataList[index];

  //TODO: 영문 한국어로 대치하는 방법
  //TODO: 첫글자 대문자로 변형 방지
  return (
    <ItemBox>
      <PayStatus>{curData.payStatus}</PayStatus>
      <PayText>{curData.payDate}</PayText>
      <PayText>
        {curData.userID.length < 9
          ? curData.userID
          : curData.userID.slice(0, 6) + "..."}
      </PayText>
      <PayText>{curData.payPrice}</PayText>
      <ItemDetail>열기</ItemDetail>
    </ItemBox>
  );
};

export default ListItem;

//styled-components
const ItemBox = styled.div`
  font-size: 14px;

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

const ItemDetail = styled.button`
  width: 60px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//TODO: body랑 container의 상하관계가 뭐였지?
