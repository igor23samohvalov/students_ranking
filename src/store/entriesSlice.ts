import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IEntry = {
  id: string;
  studentId: string;
  added: string;
  value: number;
  comment: string;
};
type EntriesState = {
  list: IEntry[];
};

const initialState: EntriesState = {
  list: [],
};

const entriesSlice = createSlice({
  name: "entrie",
  initialState,
  reducers: {
    setEntries(state, action: PayloadAction<IEntry[]>) {
      state.list = action.payload;
    },
    addEntry(state, action: PayloadAction<IEntry>) {
      state.list.push({
        id: action.payload.id,
        studentId: action.payload.studentId,
        added: action.payload.added,
        value: action.payload.value,
        comment: action.payload.comment,
      });
    },
    editEntry(state, action: PayloadAction<IEntry>) {
      state.list = state.list.map((s) => {
        if (s.id === action.payload.id) return action.payload;

        return s;
      });
    },
    removeEntry(state, action: PayloadAction<string>) {
      state.list = state.list.filter((e) => e.id !== action.payload);
    },
  },
});

export const { setEntries, addEntry, editEntry, removeEntry } =
  entriesSlice.actions;

export default entriesSlice.reducer;
