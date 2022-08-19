import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { localizer } from "../../helpers/calendarLocalizer";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { Navbar } from "../components/Navbar";
import { CalendarEvent } from "../components/CalendarEvent";
import { useState } from "react";
import { EventCalendar } from "@/interfaces/eventCalendar";
import { CalendarModal } from "../components/CalendarModal";
import { useCalendarStore, useUiStore } from "../../hooks";
import { FabAddNew } from "../components/FabAddNew";
import { FabDelete } from "../components/FabDelete";

const myEventsList = [

];

export const CalendarPage = () => {
  const {events, setActiveEvent} = useCalendarStore()
  
  const { openDateModal} = useUiStore();
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

  const onDoubleClick = (event: EventCalendar) => {
    console.log("doubleclick", event);
    openDateModal();
  };
  const onSelect = (event: EventCalendar) => {
    console.log("onSelect", event);
    setActiveEvent(event);
  };
  const onViewChanged = (event: string) => {
    localStorage.setItem("lastView", event);
  };

  return (
    <>
      <Navbar />

      <Calendar
        culture="es"
        defaultView={lastView}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "80vh" }}
        eventPropGetter={evenStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew/>
      <FabDelete/>
    </>
  );
};
