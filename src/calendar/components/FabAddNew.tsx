import { useCalendarStore, useUiStore } from "../../hooks";
import React from "react";
import { addHours } from "date-fns";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const {setActiveEvent} = useCalendarStore();

  const handleNewEvent = () => {
    setActiveEvent({
        title: "",
        notes: "",
        start: new Date(),
        end: addHours(new Date(), 1),
        bgColor: "blue",
        user: { _id:null , name: "" },
    });
    openDateModal();
  };

  return (
    <button className="btn btn-primary btn-fab" onClick={handleNewEvent}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
