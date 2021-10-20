import styled from "styled-components";
import FilterTitle from "../../container/common/H2Title";
//TODO: filterTitle 리팩토링

const CancelDetailList = () => {
  return (
    <ListBox>
      <FilterTitle>취소 항목</FilterTitle>
      <ListInnerBox>
        <DetailItem>
          <ItemTitle>결제일자</ItemTitle>
          <ItemData>21.09.10</ItemData>
        </DetailItem>
        <DetailItem>
          <ItemTitle>고객ID</ItemTitle>
          <ItemData>younghee</ItemData>
        </DetailItem>
        <DetailItem>
          <ItemTitle>상세내역</ItemTitle>
          <ItemData>주유 5만원권</ItemData>
        </DetailItem>
      </ListInnerBox>
      <ListTotal>
        <TotalTitle>취소 예정 금액 : </TotalTitle>
        <TotalData>총 50,000원</TotalData>
      </ListTotal>
    </ListBox>
  );
};

export default CancelDetailList;

//styled-components
const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--defaultSidePadding);
`;

const ListInnerBox = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  justify-content: right;
  align-item: center;
`;

const TotalTitle = styled.div`
  display: flex;
  justify-content: left;
  align-item: center;
`;

const TotalData = styled.div`
  color: var(--red);
`;
