import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataCourses = createAsyncThunk(
  "Courses/fetchDataCourses",
  async (_, {rejectWithValue}) => {
    try {
      const data = await axios.get("https://khosravitradapp.glitch.me/courses");
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const multipleFilterAsynchCourses = createAsyncThunk(
  "Courses/multipleFilterAsynchCourses",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.get("https://khosravitradapp.glitch.me/courses");
      return {courses: data.data, filter: payload};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchDataCourse = createAsyncThunk(
  "Courses/fetchDataCourse",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.get(
        `https://khosravitradapp.glitch.me/Courses/${payload.id}`
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const sendCommintCourse = createAsyncThunk(
  "Courses/sendCommint",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.patch(
        `https://khosravitradapp.glitch.me/Courses/${payload.id}`,
        payload.commints
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const sendReplayCourse = createAsyncThunk(
  "Courses/sendReplay",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.patch(
        `https://khosravitradapp.glitch.me/Courses/${payload.id}`,
        payload.commints
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  data: [],
  error: null,
  loding: false,
  course: null,
  errorSendCommint: null,
  lodingSendCommint: null,
  errorSendReplay: null,
  lodingSendReplay: null,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDataCourses.pending, (state, action) => {
      return {...state, data: null, loding: true, error: null};
    });
    builder.addCase(fetchDataCourses.fulfilled, (state, action) => {
      return {...state, data: action.payload, loding: false, error: null};
    });
    builder.addCase(fetchDataCourses.rejected, (state, action) => {
      return {
        ...state,
        data: null,
        loding: false,
        error: action.payload.message,
      };
    });
    builder.addCase(multipleFilterAsynchCourses.pending, (state, action) => {
      return {...state, data: null, loding: true, error: null};
    });
    builder.addCase(multipleFilterAsynchCourses.fulfilled, (state, action) => {
      let filterdData = action.payload.courses.filter((p) => {
        return p.title
          .toLowerCase()
          .includes(action.payload.filter.search.toLowerCase());
      });

      if (action.payload.filter.filrerPrice !== "") {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filrerPrice === "free") {

            return p.price === 0;
          } else {
            return p.price !== 0;
          }
        });
      }

      if (action.payload.filter.filrerInstuctor !== "") {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filrerInstuctor === "warrenBuffett") {
            return p.instuctorId === "warrenBuffett";
          } else {
            return p.instuctorId === "jasonHardy";
          }
        });
      }

      if (action.payload.filter.filterRecordingStatus !== null) {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filterRecordingStatus === "true") {
            return p.recordingStatus;
          } else {
            return !p.recordingStatus;
          }
        });
      }
      filterdData = filterdData.filter((p) => {
        return (
          parseFloat(p.rate) >= parseFloat(action.payload.filter.filterRating)
        );
      });

      return {...state, data: filterdData, loding: false, error: null};
    });
    builder.addCase(multipleFilterAsynchCourses.rejected, (state, action) => {
      return {
        ...state,
        data: null,
        loding: false,
        error: action.payload.message,
      };
    });
    builder.addCase(fetchDataCourse.pending, (state, action) => {
      return {...state, course: null, loding: true, error: null};
    });
    builder.addCase(fetchDataCourse.fulfilled, (state, action) => {
      return {...state, course: action.payload, loding: false, error: null};
    });
    builder.addCase(fetchDataCourse.rejected, (state, action) => {
      return {
        ...state,
        course: null,
        loding: false,
        error: action.payload.message,
      };
    });
    builder.addCase(sendCommintCourse.pending, (state, action) => {
      return {...state, lodingSendCommint: true, errorSendCommint: null};
    });
    builder.addCase(sendCommintCourse.fulfilled, (state, action) => {
      return {
        ...state,
        course: action.payload,
        lodingSendCommint: false,
        errorSendCommint: null,
      };
    });
    builder.addCase(sendCommintCourse.rejected, (state, action) => {
      return {
        ...state,
        lodingSendCommint: false,
        errorSendCommint: action.payload.message,
      };
    });
    builder.addCase(sendReplayCourse.pending, (state, action) => {
      return {...state, lodingSendReplay: true, errorSendReplay: null};
    });
    builder.addCase(sendReplayCourse.fulfilled, (state, action) => {
      return {
        ...state,
        course: action.payload,
        lodingSendReplay: false,
        errorSendReplay: null,
      };
    });
    builder.addCase(sendReplayCourse.rejected, (state, action) => {
      return {
        ...state,
        lodingSendReplay: false,
        errorSendReplay: action.payload.message,
      };
    });
  },
});
export default coursesSlice.reducer;
