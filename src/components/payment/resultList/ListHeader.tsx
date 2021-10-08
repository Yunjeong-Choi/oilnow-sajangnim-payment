import styled from "styled-components";

const ListHeader = () => {
  return (
    <HeaderBox>
      {/* TODO: container 열간격과 어떻게 맞출것인가 */}
      <ColumnTitle>결제상태</ColumnTitle>
      <ColumnTitle>일자</ColumnTitle>
      <ColumnTitle>고객ID</ColumnTitle>
      <ColumnTitle>금액</ColumnTitle>
      <SortBy></SortBy>
      {/* TODO: select-option 넣어야 함 */}
    </HeaderBox>
  );
};

export default ListHeader;

//styled-components
const HeaderBox = styled.div`
  border-bottom: 1px solid var(--gray);

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5px;
`;

const ColumnTitle = styled.div`
  width: 60px;

  font-size: 14px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SortBy = styled.select`
  width: 60px;
`;
