import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./studentsSlice";
import entriesReducer from "./entriesSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
    entries: entriesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
