import styled from "styled-components";
import { SquareButton } from "../../common/Buttons";
import FilterTitle from "./FilterTitle";
import DateFilter from "./DateFilter";
import PayStatusFilter from "./PayStatusFilter";
import UserIDFilter from "./UserIDFilter";

const OrderSearchFilter = () => {
  return (
    <SearchFBox>
      <FilterTitle />
      <DateFilter />
      <PayStatusFilter />
      <LastFilter>
        <UserIDFilter />
        <FilterResetButton>초기화</FilterResetButton>
      </LastFilter>
    </SearchFBox>
  );
};

export default OrderSearchFilter;

// styled-components
const SearchFBox = styled.div`
  background: #ffffff;

  font-size: 20px;

  display: flex;
  flex-direction: column;
  padding: var(--defaultSidePadding);
`;

const LastFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterResetButton = styled(SquareButton)`
  width: 20%;
  background: var(--darkGray);
  border: none;

  color: #ffffff;
  font-size: 14px;
`;
