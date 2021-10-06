import styled from "styled-components";

const OrderContainer = () => {
  return (
    <>
      <ContainerHeader>
        <HeaderBox>
          <MenuButton>메뉴</MenuButton>
          <Title>주문관리</Title>
        </HeaderBox>
        <HeaderBox>
          <NotiButton />
          <QRButton>QR인식</QRButton>
        </HeaderBox>
      </ContainerHeader>
      <main></main>
      <footer></footer>
    </>
  );
};

export default OrderContainer;

// styled-components
const ContainerHeader = styled.header`
  height: 78px;
  background: white;

  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBox = styled.div`
  display: flex;
`;

const MenuButton = styled.button`
  width: 48px;
  height: 36px;
  background: var(--lightGray);
  border-radius: 18px;
  border: none;
  cursor: pointer;

  font-weight: bold;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.04em;

  margin-right: 8px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 28px;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotiButton = styled(MenuButton)`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgB5ZJhDYAgEEY/TWAEmlnBBhLBCDYyAjYwAnIOnCKCHM4/vu1ttylviABxWuNiVHbOpjH2NqKtNA9G8TTSegFfetalIl0k4Hv7qSKxk9DOmlBozIg4ZSg0MULKLa4OIQ0eW6PGS/wgJMBHHAf6jZqpcrGSyB6rwL8/J+iMZpQz4wskrmcxgAktXKwy9uIKaOpvc/VCjxgAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-position: center;
`;

const QRButton = styled(MenuButton)`
  width: 77px;
  background: var(--oilBlue);
  color: white;

  margin-right: 0;
`;
