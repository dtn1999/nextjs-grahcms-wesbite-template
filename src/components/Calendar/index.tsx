/* eslint-disable react/display-name */
import React from "react";

import {
  Calendar as ReactBigCalendar,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import { BaseProps } from "src/types/components";
import CalendarToolBar from "./CalendarToolbar";

const localizer = momentLocalizer(moment); // or globalizeLocalizer

interface Props extends BaseProps {}

const EventsCalendar: React.FC<Props> = () => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(true);

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  return (
    <ReactBigCalendar
      localizer={localizer}
      defaultView="month"
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "100vh" }}
      onNavigate={(date) => {
        setSelectedDate(date);
      }}
      dayPropGetter={(date: Date, resourceId) => {
        console.log(date, resourceId);
        return {
          className: "text-left hover:bg-[#F3FFF9]",
        };
      }}
      eventPropGetter={(event, start, end, isSelected) => ({
        event,
        start,
        end,
        isSelected,
        style: {
          backgroundColor: "transparent",
          color: "#626262",
          fontWeight: "bold",
          fontSize: "22px",
        },
      })}
      className="-z-10 bg-transparent text-left text-[22px] font-bold text-primary"
      components={{
        header: (props: any) => {
          console.log(props);
          const { label } = props;
          return (
            <div className="flex justify-center border-none py-[19px] font-light text-[#626262]">
              <span>{label}</span>
            </div>
          );
        },
        toolbar: (props) => (
          <CalendarToolBar
            selectedDate={selectedDate as Date}
            onDateChange={setSelectedDate}
            {...props}
          />
        ),
      }}
    />
  );
};

export default EventsCalendar;
