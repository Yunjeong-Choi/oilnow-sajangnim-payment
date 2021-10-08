import styled from "styled-components";
import { RoundSquareButton, SquareButton } from "../../common/Buttons";
import ListHeader from "./ListHeader";

const OrderSearchResultList = () => {
  return (
    <ResultList>
      <ListHeader />
      <ListContainer></ListContainer>
    </ResultList>
  );
};

export default OrderSearchResultList;

//styled-components
const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: var(--defaultSidePadding);
  padding-top: 10px;
`;

const ListContainer = styled.div``;
