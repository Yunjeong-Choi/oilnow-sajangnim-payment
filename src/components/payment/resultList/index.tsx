import styled from "styled-components";
import ListHeader from "./ListHeader";
import ListContainer from "./ListContainer";

const PaySearchResultList = () => {
  return (
    <ResultList>
      <ListHeader />
      <ListContainer />
    </ResultList>
  );
};

export default PaySearchResultList;

// styled - components;
const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: var(--defaultSidePadding);
  padding-top: 10px;
`;
