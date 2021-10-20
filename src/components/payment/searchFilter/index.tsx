import styled from "styled-components";
import { SquareButton } from "../../common/Buttons";
import H2Title from "../../common/H2Title";
import DateFilter from "./DateFilter";
import PayStatusFilter from "./PayStatusFilter";
import UserIDFilter from "./UserIDFilter";

const PaySearchFilter = () => {
  return (
    <SearchFilter>
      <H2Title>검색 필터</H2Title>
      <DateFilter />
      <PayStatusFilter />
      <LastRow>
        <UserIDFilter />
        <FilterResetButton>초기화</FilterResetButton>
      </LastRow>
    </SearchFilter>
  );
};

export default PaySearchFilter;

// styled-components
const SearchFilter = styled.div`
  height: 130px;
  background: #ffffff;

  font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--defaultSidePadding);
  padding-top: 10px;
  padding-bottom: 10px;
`;

const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterResetButton = styled(SquareButton)`
  width: 20%;
  background: var(--darkGray);
  border: none;

  color: #ffffff;
`;
