import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
import { IStudentId, IStudent } from "../Types/IStudent";

export const fetchStudents = createAsyncThunk<
  IStudentId[],
  undefined,
  { rejectValue: string }
>("students/fetchStudents", async (_, { rejectWithValue }) => {
  try {
    const students: any = [];

    const q = query(collection(firestore, "students"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>
      students.push({ id: doc.id, ...doc.data() }),
    );

    return students;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const addStudent = createAsyncThunk<
  IStudentId,
  IStudent,
  { rejectValue: string }
>("students/addStudent", async (data, { rejectWithValue }) => {
  try {
    const some = await addDoc(collection(firestore, "students"), data);

    return { ...data, id: some.id };
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const editStudent = createAsyncThunk<
  IStudentId,
  IStudentId,
  { rejectValue: string }
>("students/editStudent", async (data, { rejectWithValue }) => {
  try {
    const ref = doc(firestore, "students", data.id);
    setDoc(ref, data, { merge: true });

    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
export const removeStudent = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("students/removeStudent", async (id, { rejectWithValue }) => {
  try {
    await deleteDoc(doc(firestore, "students", id));

    return id;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

type StudentsState = {
  list: IStudentId[];
  loading: boolean;
  error: string | null;
};

const initialState: StudentsState = {
  list: [],
  loading: false,
  error: null,
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.list.push({
          id: action.payload.id,
          name: action.payload.name,
          surname: action.payload.surname,
          form: action.payload.form,
          rating: action.payload.rating,
        });
      })
      .addCase(editStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.list = state.list.map((s) => {
          if (s.id === action.payload.id) return action.payload;

          return s;
        });
      })
      .addCase(removeStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeStudent.fulfilled, (state, action) => {
        state.list = state.list.filter((s) => s.id !== action.payload);
      });
  },
});

export default studentsSlice.reducer;
