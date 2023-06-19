import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataDailyAnalysis=createAsyncThunk("dailyAnalysis/fetchDataDailyAnalysis", async(_,{rejectWithValue})=>{
 try {
  const data= await axios.get("https://khosravitradapp.glitch.me/dailyAnalysis");
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

export const dailyAnalysisSlice = createSlice({
  name: 'courses',
  initialState,
  extraReducers:(builder)=> {
    builder.addCase(fetchDataDailyAnalysis.pending,(state,action)=>{
      return {...state,data:null,loding:true,error:null}
    })
    builder.addCase(fetchDataDailyAnalysis.fulfilled,(state,action)=>{
      return {...state,data:action.payload,loding:false,error:null}
    })
    builder.addCase(fetchDataDailyAnalysis.rejected,(state,action)=>{
      return {...state,data:null,loding:false,error:action.payload.message}
    })
  }
})
export default dailyAnalysisSlice.reducer;