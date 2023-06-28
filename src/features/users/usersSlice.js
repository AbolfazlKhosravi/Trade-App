import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataUsers = createAsyncThunk(
  "Users/fetchDataUsers",
  async (_, {rejectWithValue}) => {
    try {
      const data = await axios.get("https://khosravitradapp.glitch.me/users");
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const posthDataUsers = createAsyncThunk(
  "Users/posthDataUsers",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.post("https://khosravitradapp.glitch.me/users",payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateDataUser = createAsyncThunk(
  "Users/updateDataUser",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.patch(`https://khosravitradapp.glitch.me/users/${payload.id}`,payload.user);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  error: null,
  loding: false,
  user: null,
};

export const UsersSlice = createSlice({
  name: "Users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDataUsers.pending, (state, action) => {
      return {...state, users: null, loding: true, error: null};
    });
    builder.addCase(fetchDataUsers.fulfilled, (state, action) => {
      return {...state, users: action.payload, loding: false, error: null};
    });
    builder.addCase(fetchDataUsers.rejected, (state, action) => {
      return {
        ...state,
        users: null,
        loding: false,
        error: action.payload.message,
      };
    });
    builder.addCase(posthDataUsers.pending, (state, action) => {
      return {...state, user: null, loding: true, error: null};
    });
    builder.addCase(posthDataUsers.fulfilled, (state, action) => {
      return {...state, user: action.payload, loding: false, error: null};
    });
    builder.addCase(posthDataUsers.rejected, (state, action) => {
      return {
        ...state,
        user: null,
        loding: false,
        error: action.payload.message,
      };
    });
    builder.addCase(updateDataUser.pending, (state, action) => {
      return {...state, user: null, loding: true, error: null};
    }).addCase(updateDataUser.fulfilled, (state, action) => {
      return {...state, user: action.payload, loding: false, error: null};
    }).addCase(updateDataUser.rejected, (state, action) => {
      return {
        ...state,
        user: null,
        loding: false,
        error: action.payload.message,
      };
    });
  },
});
export default UsersSlice.reducer;
