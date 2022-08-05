import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const initialState = {
  events: [
    {
      _id: new Date().getTime(),
      title: "All Day Event",
      notes: "Test notas",
      start: new Date(),
      end: addHours(new Date(), 1),
      bgColor: "blue",
      user: { _id: 21321, name: "pep" },
    },
  ],
  activeEvent: null,
};

export const calendarSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
  },
});

export const {onSetActiveEvent} = calendarSlice.actions;
