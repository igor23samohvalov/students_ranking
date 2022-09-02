import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../lib/firebase";
import { IEntry, IEntryId } from "../Types/IEntry";

export const fetchEntries = createAsyncThunk<
  IEntryId[],
  undefined,
  { rejectValue: string }
>("entries/fetchEntries", async (_, { rejectWithValue }) => {
  try {
    const entries: any = [];

    const q = query(collection(firestore, "entries"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => entries.push({ ...doc.data(), id: doc.id }));

    return entries;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const addEntry = createAsyncThunk<
  IEntryId,
  IEntry,
  { rejectValue: string }
>("entries/addEntry", async (data, { rejectWithValue }) => {
  try {
    const doc = await addDoc(collection(firestore, "entries"), data);

    return { ...data, id: doc.id };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const editEntry = createAsyncThunk<
  IEntryId,
  IEntryId,
  { rejectValue: string }
>("entries/editEntry", async (data, { rejectWithValue }) => {
  try {
    const ref = doc(firestore, "entries", data.id);
    setDoc(ref, data, { merge: true });

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const removeEntry = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("entries/removeEntry", async (id, { rejectWithValue }) => {
  try {
    await deleteDoc(doc(firestore, "entries", id));

    return id;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

type EntriesState = {
  list: IEntryId[];
  loading: boolean;
  error: string | null;
};
const initialState: EntriesState = {
  list: [],
  loading: false,
  error: null,
};

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEntries.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEntry.fulfilled, (state, action) => {
        state.list.push({
          id: action.payload.id,
          studentId: action.payload.studentId,
          added: action.payload.added,
          comment: action.payload.comment,
          value: action.payload.value,
        });
        state.loading = false;
      })
      .addCase(editEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editEntry.fulfilled, (state, action) => {
        state.list = state.list.map((e) => {
          if (e.id === action.payload.id) return action.payload;

          return e;
        });
        state.loading = false;
      })
      .addCase(removeEntry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeEntry.fulfilled, (state, action) => {
        state.list = state.list.filter((e) => e.id !== action.payload);
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default entriesSlice.reducer;
