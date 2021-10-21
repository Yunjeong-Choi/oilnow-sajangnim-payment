import styled from "styled-components";
import FilterTitle from "../../common/H2Title";

const CancelReason = () => {
  return (
    <ReasonBox>
      <FilterTitle>취소 사유</FilterTitle>
      <ReasonList>
        <option defaultValue="cancel-reason">취소사유를 선택해주세요</option>
        <option value="customer-request">
          고객의 구매의사 변심으로 인한 환불
        </option>
        <option value="out-of-stock">상품 재고 없음</option>
        <option value="others">기타</option>
      </ReasonList>
    </ReasonBox>
  );
};

export default CancelReason;

//styled-components
const ReasonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
`;

const ReasonList = styled.select`
  height: 30px;
  width: 250px;
`;
