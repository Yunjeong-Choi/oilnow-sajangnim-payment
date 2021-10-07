import ContainerHeader from "./common/ContainerHeader";
import styled from "styled-components";

const payStatusList = ["결제대기", "결제완료", "취소요청", "취소완료"];

const OrderContainer = () => {
  return (
    <>
      <ContainerHeader>주문관리</ContainerHeader>
      <main>
        <OrderSearchFilter>
          <FilterTitle>
            <TitleText>검색 필터</TitleText>
          </FilterTitle>
          <DateFilter>
            <StartDate>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBzZTPDYIwFMZfCwlXnABGcAPZQEZgBE8QTuqJfxc3kA3UUZzAjuCJI/gVISHQQxFj/JLy6Efer+T1tUQjpWl6yrJsRwrleX5OkiQY+3xicO4j+KRWYBjGZmwy+cDKe8ZY0HluF4UCIr89+9E0zTWKoiMDwAfgQh+qqqoVB8CmBbIsyzb7ifw1hLtuMhbfIqzluzkwb2EYlroQlMFFTgvh9AXNgqBPHrKPFkEghj6amCbNEGrmqvzf1+T/IcNmc3DMPd1E7JKDLn9DkCzkBOOAY67LoA4g4jgW7VVQFIVX17VHM4WcUkJeTJBJHnh8srgAAAAASUVORK5CYII="
                alt="calendarIcon"
              />
            </StartDate>
            <Tilde>~</Tilde>
            <EndDate>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBzZTPDYIwFMZfCwlXnABGcAPZQEZgBE8QTuqJfxc3kA3UUZzAjuCJI/gVISHQQxFj/JLy6Efer+T1tUQjpWl6yrJsRwrleX5OkiQY+3xicO4j+KRWYBjGZmwy+cDKe8ZY0HluF4UCIr89+9E0zTWKoiMDwAfgQh+qqqoVB8CmBbIsyzb7ifw1hLtuMhbfIqzluzkwb2EYlroQlMFFTgvh9AXNgqBPHrKPFkEghj6amCbNEGrmqvzf1+T/IcNmc3DMPd1E7JKDLn9DkCzkBOOAY67LoA4g4jgW7VVQFIVX17VHM4WcUkJeTJBJHnh8srgAAAAASUVORK5CYII="
                alt="calendarIcon"
              />
            </EndDate>
          </DateFilter>
          <PayStatusFilter>
            {payStatusList.map((status) => (
              <PayStatus key={status}>{status}</PayStatus>
            ))}
          </PayStatusFilter>
          <UserIDFilter></UserIDFilter>
        </OrderSearchFilter>
      </main>
      <footer></footer>
    </>
  );
};

export default OrderContainer;

// styled-components
const OrderSearchFilter = styled.div`
  background: #ffffff;

  display: flex;
  flex-direction: column;
  padding: var(--defaultSidePadding);
`;

const FilterTitle = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 10px;
`;

const TitleText = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

//TODO: datefilter에 라이브러리 연결하고 placeholder와 달력아이콘 정렬하기
const DateFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const StartDate = styled.button`
  height: 35px;
  width: 160px;
  background: #ffffff;
  border-radius: 4px;
  border: 0.7px solid var(--gray);
`;

const Tilde = styled.div`
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const EndDate = styled(StartDate)``;

const PayStatusFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

//TODO: roundsquarebutton으로 리팩토링 필요 (radius 18px로 통일)
//squarebutton은 radius 4px로 통일
const PayStatus = styled.button`
  height: 35px;
`;

//TODO: styled-component에서 input은 어떻게 사용하는가
const UserIDFilter = styled.input`
  height: 35px;
  width: 347px;
`;
