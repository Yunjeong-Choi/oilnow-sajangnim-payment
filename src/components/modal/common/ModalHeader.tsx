import { FunctionComponent } from "react";
import styled from "styled-components";

//FunctionComponent 타입을 지정해주지 않으면 props를 사용할 수 없음
const ModalHeader: FunctionComponent = (props) => {
  const { children } = props;

  return (
    <HeaderBox>
      <CloseModalBtn></CloseModalBtn>
      <ModalTitle>{children}</ModalTitle>
    </HeaderBox>
  );
};

export default ModalHeader;

//styled-components
const HeaderBox = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;

  padding: var(--defaultSidePadding);
  padding-top: 25px;
  padding-bottom: 25px;
`;

const CloseModalBtn = styled.button`
  width: 20px;
  height: 30px;
  border: none;
  box-sizing: border-box;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAZCAYAAADuWXTMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG9SURBVHgBnZRPTsJAFMa/aRtc6II1atIjlAgJsBp2LuEGLF3CCfAG4AnQpSu27hgSIyRgwBtMAkGXdScKjG+aVvnTQMtLCNPp/F7e997XYTgiHM6T1hx1hpjh5LhtGWjrpREHvMrzkmlgpEH6uZHhTJ43GEObSk0yBWmtkLYOQV6ZDC0wcP2sFB7OTlAVQrh74UyOc2UQCNjehkLttSeawXu2p8wqvW34jy4MlIfPQqyf2YH1GMw5WqSv5B8YmyuU+30ht89uNMzJcsf8xigAFXB3mkAxDNRhrZepmDf4ZJi+sGCBW6i+qrdBY8AC5cFAjHEgLF0mgfafPkX6BuFl7sAsGAOBgxeRRowwCJb+2skU+EibIjL8k0BadzVIYDJ0stT1KLD5IeXX+0Q+pS7sTxJ9TWNKwsRN6tzGbCq7++ANk+So5KWBjvq3Y3PYE7VIcJBgoW0ZGIVGt1QojkOMYm5vTKfSpXIfU5e2Tsy1DFqUzi/sN9qXe+EgZhMpSHeX6U9R+4Chst2Hg9eQJ8O/djwZwP0ygdqYvufIdxh54Jb+6l4Cvw+xLsBsgVd0An8abixYx844j4mrAm/+AgjIoXdWjDEUAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-position: center;

  margin: 0 20px 0 10px;
`;

const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
