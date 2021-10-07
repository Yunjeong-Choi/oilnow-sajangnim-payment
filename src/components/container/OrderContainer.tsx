import ContainerHeader from "./common/ContainerHeader";
import styled from "styled-components";
import { RoundSquareButton } from "../common/Buttons";

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
          <UserIDFilter
            type="text"
            placeholder="고객ID를 입력해주세요."
          ></UserIDFilter>
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

  font-size: 20px;

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

const PayStatus = styled(RoundSquareButton)`
  height: 30px;
  width: 80px;

  font-size: 14px;
`;

//TODO: styled-component에서 input은 어떻게 사용하는가
//input의 테두리랑 사이즈도 문제임
const UserIDFilter = styled.input`
  height: 35px;
  width: 347px;
  border: 0.7px solid var(--gray);
  box-sizing: border-box;

  padding: 10px;
`;
