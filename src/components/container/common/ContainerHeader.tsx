import { FunctionComponent } from "react";
import styled from "styled-components";
import { RoundSquareButton } from "../../common/Buttons";

const ContainerHeader: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <HeaderBox>
      <HeaderInnerBox>
        <MenuButton>메뉴</MenuButton>
        <Title>{children}</Title>
      </HeaderInnerBox>
      <HeaderInnerBox>
        <NotiButton />
        <QRButton>QR인식</QRButton>
      </HeaderInnerBox>
    </HeaderBox>
  );
};

export default ContainerHeader;

//styled-components
const HeaderBox = styled.header`
  height: 78px;
  background: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--defaultSidePadding);
`;

const HeaderInnerBox = styled.div`
  display: flex;
`;

const MenuButton = styled(RoundSquareButton)`
  width: 48px;
  height: 36px;
  background: var(--lightGray);
  border: none;

  font-weight: bold;
  font-size: 14px;

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
