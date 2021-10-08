import styled from "styled-components";

const ListContainer = () => {
  return (
    <ContainerBox>
      <ListItem>
        <PayStatus>결제대기</PayStatus>
        <PayText>21.09.10</PayText>
        <PayText>younghee</PayText>
        <PayText>10,000</PayText>
        <ItemDetail>열기</ItemDetail>
      </ListItem>
    </ContainerBox>
  );
};

export default ListContainer;

//styled-components
const ContainerBox = styled.div`
  font-size: 14px;

  padding-top: 8px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PayText = styled.div`
  width: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PayStatus = styled(PayText)`
  box-sizing: border-box;
  border-radius: 18px;
  border: none;
  background: palegreen;

  font-size: 12px;

  padding: 7px 5px;
`;

const ItemDetail = styled.button`
  width: 60px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//TODO: body랑 container의 상하관계가 뭐였지?
