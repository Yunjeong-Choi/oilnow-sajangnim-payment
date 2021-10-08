import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FunctionComponent, useState } from "react"; //TODO: React도 같이 임포트 해줘야 하나?

interface DateBoxProps {
  selected: Date;
  onChange: (arg0: Date) => void;
  placeholderText: string;
  minDate?: Date;
}

const DateBox: FunctionComponent<DateBoxProps> = (props) => {
  const { selected, onChange, placeholderText, minDate } = props;

  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      placeholderText={placeholderText}
      minDate={minDate}
      popperPlacement="top-start"
      dateFormat="yyyy/MM/dd"
    />
  );
};

export default DateBox;

// const StartDate = styled.button`
//   height: 35px;
//   width: 160px;
//   background: #ffffff;
//   border-radius: 4px;
//   border: 0.7px solid var(--gray);
// `;

// TODO: 캘린더 박스의 화살표를 어떻게 없앨까
