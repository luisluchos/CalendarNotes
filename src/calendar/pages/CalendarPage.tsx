import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { localizer } from "../../helpers/calendarLocalizer";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar } from "../components/Navbar";
import { CalendarEvent } from "../components/CalendarEvent";
import { useState } from "react";
import { EventCalendar } from "@/interfaces/eventCalendar";

const myEventsList = [
  {
    title: "All Day Event",
    notes: "afffa",
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: "blue",
    user: { _id: 21321, name: "pep" },
  },
];

export const CalendarPage = () => {
  const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month");

  const evenStyleGetter = (event, start, end, isSelected) => {
    let style = {
      backgroundColor: "#facaga",
      borderRadius: "5px",
      opacity: 0.8,
      color: "red",
    };
    return {
      style: style,
    };
  };

  const onDoubleClick = (event:EventCalendar) => {
    console.log("doubleclick", event);
  };
  const onSelect = (event:EventCalendar) => {
    console.log("onSelect", event);
  };
  const onViewChanged = (event:string) => {
    localStorage.setItem("lastView", event);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        defaultView={lastView}
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh" }}
        eventPropGetter={evenStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
    </>
  );
};
