import styled from "styled-components";
import Calendar from "../../common/Calendar";
import { useState } from "react";

const DateFilter = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <DateBox>
      <Calendar
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        placeholderText="시작일자"
      />
      <Tilde>~</Tilde>
      <Calendar
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        placeholderText="종료일자"
        minDate={startDate}
      />
    </DateBox>
  );
};

export default DateFilter;

//styled-components
const DateBox = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tilde = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// react-date-picker가 더 기본 css가 오일나우과 결이 비슷하고, 예시 정리가 깔끔하게 잘되어있어서 원래 이걸 쓰려고 했음.
// 그러나 해당 모듈(?)을 선택한 이유는 예시가 함수형과 hook을 사용해서 작성되어있음.
// 그리고 npm calendar 검색결과 중 가장 인기가 많으며 최근에 업데이트 된 바 있음. 이슈처리도 활발함 */

//     < img
// src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBzZTPDYIwFMZfCwlXnABGcAPZQEZgBE8QTuqJfxc3kA3UUZzAjuCJI/gVISHQQxFj/JLy6Efer+T1tUQjpWl6yrJsRwrleX5OkiQY+3xicO4j+KRWYBjGZmwy+cDKe8ZY0HluF4UCIr89+9E0zTWKoiMDwAfgQh+qqqoVB8CmBbIsyzb7ifw1hLtuMhbfIqzluzkwb2EYlroQlMFFTgvh9AXNgqBPHrKPFkEghj6amCbNEGrmqvzf1+T/IcNmc3DMPd1E7JKDLn9DkCzkBOOAY67LoA4g4jgW7VVQFIVX17VHM4WcUkJeTJBJHnh8srgAAAAASUVORK5CYII="
// alt="calendarIcon" />
