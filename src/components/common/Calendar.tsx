import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FunctionComponent } from "react";
//TODO: React도 같이 임포트 해줘야 하나?

interface CalendarProps extends ReactDatePickerProps {}

const Calendar: FunctionComponent<CalendarProps> = (props) => {
  const { selected, onChange, placeholderText, minDate } = props;

  return (
    <div style={{ width: "auto" }}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={placeholderText}
        minDate={minDate}
        popperPlacement="top-start"
        dateFormat="yyyy/MM/dd"
      />
    </div>
  );
};

export default Calendar;

// const StartDate = styled.button`
//   height: 35px;
//   width: 160px;
//   background: #ffffff;
//   border-radius: 4px;
//   border: 0.7px solid var(--gray);
// `;

// TODO: 캘린더 박스의 화살표를 어떻게 없앨까
//TODO: DateBox 자체의 style 설정해줘야함
//왜 오른쪽에 여백이 남는지 모르겠네...
