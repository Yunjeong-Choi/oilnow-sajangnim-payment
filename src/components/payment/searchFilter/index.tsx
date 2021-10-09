import styled from "styled-components";
import { SquareButton } from "../../common/Buttons";
import FilterTitle from "./FilterTitle";
import DateFilter from "./DateFilter";
import PayStatusFilter from "./PayStatusFilter";
import UserIDFilter from "./UserIDFilter";

const PaySearchFilter = () => {
  return (
    <SearchFilter>
      <FilterTitle>검색 필터</FilterTitle>
      <DateFilter />
      <PayStatusFilter />
      <LastFilter>
        <UserIDFilter />
        <FilterResetButton>초기화</FilterResetButton>
      </LastFilter>
    </SearchFilter>
  );
};

export default PaySearchFilter;

// styled-components
const SearchFilter = styled.div`
  background: #ffffff;

  font-size: 20px;

  display: flex;
  flex-direction: column;
  padding: var(--defaultSidePadding);
  padding-bottom: 10px;
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
