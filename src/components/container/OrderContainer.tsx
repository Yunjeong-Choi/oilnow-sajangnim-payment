import ContainerHeader from "./common/ContainerHeader";
import OrderSearchFilter from "../order/searchFilter";
import OrderSearchResultList from "../order/resultList";
// import styled from "styled-components";

const OrderContainer = () => {
  return (
    <>
      <ContainerHeader>주문관리</ContainerHeader>
      <main>
        <OrderSearchFilter />
        <OrderSearchResultList />
      </main>
      <footer></footer>
    </>
  );
};

export default OrderContainer;

// styled-components
