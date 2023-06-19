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
  }
})
export default coursesSlice.reducer;