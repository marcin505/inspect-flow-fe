import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export type DateType = Date | null;

interface DatepickerProps {
  onChange: (date: DateType) => void;
  startDate: DateType;
}

export const Datepicker = ({ onChange, startDate }: DatepickerProps) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      dateFormat={"dd/MM/yyyy"}
    />
  );
};
