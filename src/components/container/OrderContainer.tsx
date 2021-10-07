import ContainerHeader from "./common/ContainerHeader";
import styled from "styled-components";

// const payStatusList = ["결제대기", "결제완료", "취소요청", "취소완료"];

const OrderContainer = () => {
  return (
    <>
      <ContainerHeader>주문관리</ContainerHeader>
      <main>
        <OrderSearchFilter>
          <FilterTitle>
            <TitleText>검색 필터</TitleText>
          </FilterTitle>
          {/* <DateFilter>
          <StartDate></StartDate>
        </DateFilter>
        <PayStatusFilter>{payStatusList.map}</PayStatusFilter>
        <UserIDFilter></UserIDFilter> */}
        </OrderSearchFilter>
      </main>
      <footer></footer>
    </>
  );
};

export default OrderContainer;

// styled-components
const OrderSearchFilter = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--defaultSidePadding);
`;

const FilterTitle = styled.div`
  display: flex;
  justify-content: left;
`;

const TitleText = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
