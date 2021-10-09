import styled from "styled-components";

const FilterTitle = () => {
  return (
    <TitleBox>
      <TitleText>검색 필터</TitleText>
    </TitleBox>
  );
};

export default FilterTitle;

//styled-components
const TitleBox = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  font-weight: 500;
`;
