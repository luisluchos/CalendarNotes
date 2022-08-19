import { useSelector, useDispatch } from "react-redux";
import {
  onSetActiveEvent,
  onAddEvent,
  onUpdateEvent,
  onDeleteEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { events, activeEvent } = useSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    if (calendarEvent._id) {
      //updating
      dispatch(onUpdateEvent(calendarEvent));
    } else {
      //Creando
      dispatch(onAddEvent({ ...calendarEvent, _id: Math.random() }));
    }
  };

  const onDeletingEvent = (calendarEvent_id) => {
    dispatch(onDeleteEvent(calendarEvent_id));
  };

  return {
    hasEventSelected: !!activeEvent, // si es null return falso, si contiene algo devuelve true
    activeEvent,
    setActiveEvent,
    startSavingEvent,
    onDeletingEvent,
    events
  };
};
