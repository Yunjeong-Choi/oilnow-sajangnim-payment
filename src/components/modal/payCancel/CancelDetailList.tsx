import styled from "styled-components";
import H2Title from "../../common/H2Title";

const database = {
  payStatus: "paid",
  payDate: "21. 07. 05",
  userID: "younghee",
  payDetail: "주유 5만원권",
  payType: "gifticon",
  payPrice: 50000,
  cancelReason: null,
};

//TODO: DetailItem을 반복하지 않는 방법은?

const CancelDetailList = () => {
  return (
    <ListBox>
      <H2Title>취소 항목</H2Title>
      <ListInnerBox>
        <DetailItem>
          <ItemTitle>결제일자</ItemTitle>
          <ItemData>{database.payDate}</ItemData>
        </DetailItem>
        <DetailItem>
          <ItemTitle>고객ID</ItemTitle>
          <ItemData>{database.userID}</ItemData>
        </DetailItem>
        <DetailItem>
          <ItemTitle>상세내역</ItemTitle>
          <ItemData>{database.payDetail}</ItemData>
        </DetailItem>
      </ListInnerBox>
      <ListTotal>
        <TotalTitle>취소 예정 금액 : </TotalTitle>
        <TotalData>{database.payPrice}</TotalData>
      </ListTotal>
    </ListBox>
  );
};

export default CancelDetailList;

//styled-components
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListInnerBox = styled.div`
  height: 70px;
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px 8px;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const ItemTitle = styled.div`
  display: flex;
  justify-content: left;
  align-item: center;
`;

const ItemData = styled.div`
  display: flex;
  justify-content: right;
  align-item: center;
`;

const ListTotal = styled.div`
  font-weight: 500;

  display: flex;
  justify-content: right;
  align-item: center;
  padding-right: 8px;
`;

const TotalTitle = styled.div`
  display: flex;
  justify-content: left;
  align-item: center;
  margin-right: 3px;
`;

const TotalData = styled.div`
  color: var(--red);
`;
