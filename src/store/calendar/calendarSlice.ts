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

    onAddEvent: (state, action) => {
      state.events.push(action.payload);
      state.activeEvent = null;
    },

    onUpdateEvent: (state, action) => {
      state.events = state.events.map((event) => {
        if (event._id === action.payload._id) {
          return action.payload;
        }
        return event;
      });
    },

    onDeleteEvent: (state, action) => {
      if (state.activeEvent) {
        console.log("EVENTS", state.events);
        state.events = state.events.filter((event) => event._id !== action.payload);
        state.activeEvent = null;
      }
    },
  },
});

export const { onSetActiveEvent, onAddEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;
