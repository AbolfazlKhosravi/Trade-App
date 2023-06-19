
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDataProducts=createAsyncThunk("Products/fetchDataProducts", async(_,{rejectWithValue})=>{
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
    builder.addCase(fetchDataProducts.pending,(state,action)=>{
      return {...state,data:null,loding:true,error:null}
    })
    builder.addCase(fetchDataProducts.fulfilled,(state,action)=>{
      return {...state,data:action.payload,loding:false,error:null}
    })
    builder.addCase(fetchDataProducts.rejected,(state,action)=>{
      return {...state,data:null,loding:false,error:action.payload.message}
    })
  }
})
export default productsSlice.reducer;