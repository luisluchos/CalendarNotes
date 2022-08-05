import { useSelector, useDispatch } from "react-redux";
import { onSetActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dipatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dipatch(onSetActiveEvent(calendarEvent));
  };

  return {
    events,
    activeEvent,
    setActiveEvent,
  };
};
