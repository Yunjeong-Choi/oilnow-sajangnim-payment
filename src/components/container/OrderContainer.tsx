import ContainerHeader from "./common/ContainerHeader";
import styled from "styled-components";
import { RoundSquareButton, SquareButton } from "../common/Buttons";
import DateBox from "../common/DateBox";
import { useState } from "react";

const payStatusList = ["결제대기", "결제완료", "취소요청", "취소완료"];

const OrderContainer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  //TODO: 초기값을 없애고 싶은데 그럼 발생하는 type의 문제를 어떻게 해야할지 모르겠음...

  return (
    <>
      <ContainerHeader>주문관리</ContainerHeader>
      <main>
        <OrderSearchFilter>
          <FilterTitle>
            <TitleText>검색 필터</TitleText>
          </FilterTitle>
          {/* react-date-picker가 더 기본 css가 오일나우과 결이 비슷하고, 예시 정리가 깔끔하게 잘되어있어서 원래 이걸 쓰려고 했음.
          그러나 해당 모듈(?)을 선택한 이유는 예시가 함수형과 hook을 사용해서 작성되어있음.
          그리고 npm calendar 검색결과 중 가장 인기가 많으며 최근에 업데이트 된 바 있음. 이슈처리도 활발함 */}
          {/* <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBzZTPDYIwFMZfCwlXnABGcAPZQEZgBE8QTuqJfxc3kA3UUZzAjuCJI/gVISHQQxFj/JLy6Efer+T1tUQjpWl6yrJsRwrleX5OkiQY+3xicO4j+KRWYBjGZmwy+cDKe8ZY0HluF4UCIr89+9E0zTWKoiMDwAfgQh+qqqoVB8CmBbIsyzb7ifw1hLtuMhbfIqzluzkwb2EYlroQlMFFTgvh9AXNgqBPHrKPFkEghj6amCbNEGrmqvzf1+T/IcNmc3DMPd1E7JKDLn9DkCzkBOOAY67LoA4g4jgW7VVQFIVX17VHM4WcUkJeTJBJHnh8srgAAAAASUVORK5CYII="
                alt="calendarIcon"
              /> */}
          <DateFilter>
            <DateBox
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              // TODO: 여기 인자에 타입을 지정해주니까 에러가 없어졌다
              placeholderText="시작일자"
            />
            <Tilde>~</Tilde>
            <DateBox
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              placeholderText="종료일자"
              minDate={startDate}
            />
          </DateFilter>
          <PayStatusFilter>
            {payStatusList.map((status) => (
              <PayStatus key={status}>{status}</PayStatus>
            ))}
          </PayStatusFilter>
          <LastFilter>
            <UserIDInput
              type="text"
              placeholder="고객ID를 입력해주세요."
            ></UserIDInput>
            <FilterResetButton>초기화</FilterResetButton>
          </LastFilter>
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

const DateFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Tilde = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const LastFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

//TODO: enter하면 왜 submit이 안돼지
//왜 오른쪽에 여백이 남는지 모르겠네...
const UserIDInput = styled.input`
  height: 35px;
  width: 100%;
  border: 0.7px solid var(--gray);
  box-sizing: border-box;
  border-radius: 4px;

  padding: 10px;
  margin-right: 10px;
`;

const FilterResetButton = styled(SquareButton)`
  width: 20%;
  background: var(--darkGray);
  border: none;

  color: #ffffff;
  font-size: 14px;
`;
