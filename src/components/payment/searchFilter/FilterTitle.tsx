import styled from "styled-components";

const FilterTitle = () => {
  return (
    <FilterBox>
      <TitleText>검색 필터</TitleText>
    </FilterBox>
  );
};

export default FilterTitle;

//styled-components
const FilterBox = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  font-weight: 500;
`;
