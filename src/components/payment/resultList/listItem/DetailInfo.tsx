import { FunctionComponent } from "react";
import styled from "styled-components";
import { SquareButton } from "../../../common/Buttons";
import * as payDatabase from "../../../../database/payDatabase.json";

const dataList = payDatabase.dataList;

interface DetailInfoProps {
  curIndex: number;
}

const DetailInfo: FunctionComponent<DetailInfoProps> = (props) => {
  const { curIndex } = props;
  const curData = dataList[curIndex];

  return (
    <DetailBox>
      <DetailTextBox>
        <div>상세내역</div>
        <PayDetail>{curData.payDetail}</PayDetail>
      </DetailTextBox>
      <CancelButton>결제취소</CancelButton>
    </DetailBox>
  );
};

export default DetailInfo;

//styled-components
const DetailBox = styled.div`
  height: 63px;
  box-sizing: border-box;
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px 20px;
  padding: 10px 50px 10px 60px;
`;

const DetailTextBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
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
