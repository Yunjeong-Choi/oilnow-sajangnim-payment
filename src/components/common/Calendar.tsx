import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface CalendarProps extends ReactDatePickerProps {}

const Calendar: FunctionComponent<CalendarProps> = (props) => {
  const { selected, onChange, placeholderText, minDate } = props;

  return (
    <StyledDatePicker>
      <DatePicker
        selected={selected}
        onChange={onChange}
        placeholderText={placeholderText}
        minDate={minDate}
        popperPlacement="top-start"
        dateFormat="yyyy/MM/dd"
      />
    </StyledDatePicker>
  );
};

export default Calendar;

// styled-components
const StyledDatePicker = styled.div`
  width: auto;
`;
// 높이(30px) 조절 실패
