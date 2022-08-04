import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const initialState = {
  events: [
    {
      title: "All Day Event",
      notes: "afffa",
      start: new Date(),
      end: addHours(new Date(), 1),
      bgColor: "blue",
      user: { _id: 21321, name: "pep" },
    },
  ],
};

export const calendarSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
});

export const {} = calendarSlice.actions;
