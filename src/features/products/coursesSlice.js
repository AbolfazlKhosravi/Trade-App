import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataCourses=createAsyncThunk("Courses/fetchDataCourses", async(_,{rejectWithValue})=>{
 try {
  const data= await axios.get("https://khosravitradapp.glitch.me/courses");
  return data.data
 } catch (error) {
  return rejectWithValue(error)
 }
})
export const multipleFilterAsynchCourses = createAsyncThunk(
  "Courses/multipleFilterAsynchCourses",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.get(
        "https://khosravitradapp.glitch.me/courses"
      );
      return {courses: data.data, filter: payload};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  data:[],
  error:null,
  loding:false,
}

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  extraReducers:(builder)=> {
    builder.addCase(fetchDataCourses.pending,(state,action)=>{
      return {...state,data:null,loding:true,error:null}
    })
    builder.addCase(fetchDataCourses.fulfilled,(state,action)=>{
      return {...state,data:action.payload,loding:false,error:null}
    })
    builder.addCase(fetchDataCourses.rejected,(state,action)=>{
      return {...state,data:null,loding:false,error:action.payload.message}
    })
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
            console.log("free");

            return p.price === 0;
          } else {
            console.log("noFree");
            return p.price !== 0;
          }
        });
      }

      if (action.payload.filter.filrerInstuctor !== "") {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filrerInstuctor === "warrenBuffett") {
            console.log("warrenBuffett");
            return p.instuctorId === "warrenBuffett";
          } else {
            console.log("jasonHardy");
            return p.instuctorId === "jasonHardy";
          }
        });
      }

      if (action.payload.filter.filterRecordingStatus !== null) {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filterRecordingStatus === "true") {
            console.log("recording");
            return p.recordingStatus;
          } else {
            console.log("full");
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
  }
})
export default coursesSlice.reducer;