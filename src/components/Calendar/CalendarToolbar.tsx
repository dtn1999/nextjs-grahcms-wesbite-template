import React from "react";
import DatePicker from "react-datepicker";
import { RiSearchLine } from "react-icons/ri";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { ToolbarProps } from "react-big-calendar";

interface Props extends ToolbarProps {
  selectedDate: Date;
  onDateChange: (date: Date | null) => void;
}

const MonthPickerInput = React.forwardRef<any, any>(
  ({ value, onClick }, ref) => {
    return (
      <span
        ref={ref}
        onClick={onClick}
        className="flex cursor-pointer items-center justify-center space-x-2 rounded-[5px] border border-[#D9D9D9] px-[38px] py-[8px] font-light capitalize text-black"
      >
        <span>{value}</span>
        <MdOutlineKeyboardArrowDown size={24} />
      </span>
    );
  }
);

const CalendarToolBar: React.FC<Props> = ({ children, ...props }) => {
  const { selectedDate, onDateChange } = props;
  return (
    <div className="z-50 flex items-end justify-between py-[1rem]">
      <div className="flex items-center space-x-[8px]">
        <div className="flex space-x-[8px]">
          {/* arrows buttons */}
          <span
            onClick={() => {
              props.onNavigate("PREV");
            }}
            className="flex cursor-pointer items-center justify-center rounded-[5px] border border-[#D9D9D9] p-[8px] text-black"
          >
            <MdArrowBackIos size={24} />
          </span>
          <span
            onClick={() => {
              props.onNavigate("NEXT");
            }}
            className="flex cursor-pointer items-center justify-center rounded-[5px] border border-[#D9D9D9] p-[8px] text-black"
          >
            <MdArrowForwardIos size={24} />
          </span>
        </div>
        <div className="flex space-x-[2rem]">
          <span
            onClick={() => {
              props.onNavigate("TODAY");
            }}
            className="flex cursor-pointer items-center justify-center rounded-[5px] border border-[#D9D9D9] px-[38px] py-[8px] font-light capitalize text-black"
          >
            today
          </span>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              onDateChange(date);
              props.onNavigate("DATE", date as Date);
            }}
            customInput={<MonthPickerInput />}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
          />
        </div>
      </div>
      {/* search input */}
      <div className="flex flex-col items-start">
        <h2 className="capitalize text-black">search</h2>
        <div className="flex items-center rounded border pr-[1rem] focus-within:border-green-400">
          <input
            type="text"
            className="min-w-[381px] rounded border-0 py-[1rem] focus:outline-0 focus:ring-0 focus:ring-transparent"
            autoComplete="off"
            placeholder="Enter Keywords"
          />
          <RiSearchLine size={25} />
        </div>
      </div>
    </div>
  );
};

export default CalendarToolBar;
