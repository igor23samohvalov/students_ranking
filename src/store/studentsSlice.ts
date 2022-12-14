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
import { notify } from "../lib/utility";
import { IStudentId, IStudent } from "../Types/IStudent";
// import { addEntry } from "./entriesSlice";

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
      students.push({ ...doc.data(), id: doc.id }),
    );

    return students;
  } catch (error: any) {
    return rejectWithValue(error);
  }
});
export const addStudent = createAsyncThunk<
  IStudentId,
  IStudent,
  { rejectValue: string }
>("students/addStudent", async (data, { rejectWithValue }) => {
  try {
    const doc = await addDoc(collection(firestore, "students"), data);

    return { ...data, id: doc.id };
  } catch (error: any) {
    return rejectWithValue(error);
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
    return rejectWithValue(error);
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
    return rejectWithValue(error);
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

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}

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
          email: action.payload.email,
        });
        state.loading = false;
        notify("?????????????? ?????????????? ????????????????", "success");
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
        state.loading = false;
        notify("???????????? ???????????????? ????????????????", "success");
      })
      .addCase(removeStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeStudent.fulfilled, (state, action) => {
        state.list = state.list.filter((s) => s.id !== action.payload);
        state.loading = false;
        notify("?????????????? ????????????", "success");
      })
      // .addCase(addEntry.fulfilled, (state, action) => {
      //   const student = state.list.find((s) => {
      //     if (s.id === action.payload.studentId) {
      //       return { ...s, rating: s.rating + action.payload.value };
      //     }
      //     return s;
      //   });
      //   console.log(student);
      //   console.log("state", state.list[0]);
      // })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
        notify("???????????????? ???? ??????????????", "error");
      });
  },
});

export default studentsSlice.reducer;
