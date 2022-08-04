import { useSelector, useDispatch } from "react-redux";
import { l } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  //const dipatch = useDispatch();

  const { events } = useSelector((state) => state.calendar);



  return {
    events,
  };
};
