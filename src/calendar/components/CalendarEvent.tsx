import { Event } from "@/interfaces/eventCalendar";

export const CalendarEvent = ({ event }: Event) => {
  const { title, user } = event;

  return (
    <>
      <strong>{title}</strong>
      <span>- {user.name}</span>
    </>
  );
};
