import styled from "styled-components";
import FilterTitle from "../../container/common/H2Title";

const CancelReason = () => {
  return (
    <ReasonBox>
      <FilterTitle>취소 사유</FilterTitle>
      <ReasonList></ReasonList>
    </ReasonBox>
  );
};

export default CancelReason;

//styled-components
const ReasonBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--defaultSidePadding);
`;

const ReasonList = styled.select`
  width: 250px;
`;
