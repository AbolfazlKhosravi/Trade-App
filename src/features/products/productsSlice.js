
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData=createAsyncThunk("Products/fetchData", async(_,{rejectWithValue})=>{
 try {
  const data= await axios.get("https://khosravitradapp.glitch.me/products");
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

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers:(builder)=> {
    builder.addCase(fetchData.pending,(state,action)=>{
      return {...state,data:null,loding:true,error:null}
    })
    builder.addCase(fetchData.fulfilled,(state,action)=>{
      return {...state,data:action.payload,loding:false,error:null}
    })
    builder.addCase(fetchData.rejected,(state,action)=>{
      return {...state,data:null,loding:false,error:action.payload.message}
    })
  }
})
export default productsSlice.reducer;