import ContainerHeader from "./common/ContainerHeader";
import PaySearchFilter from "../payment/searchFilter";
import PaySearchResultList from "../payment/resultList";
// import styled from "styled-components";

const PayContainer = () => {
  return (
    <>
      <ContainerHeader>주문관리</ContainerHeader>
      <main>
        <PaySearchFilter />
        <PaySearchResultList />
      </main>
      <footer></footer>
    </>
  );
};

export default PayContainer;

// styled-components
