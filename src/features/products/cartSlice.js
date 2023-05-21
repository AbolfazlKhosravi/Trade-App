import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCart=createAsyncThunk("cart/fetchCart", async(_,{rejectWithValue})=>{
  try {
   const data= await axios.get("http://localhost:3001/cart");
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
 })
export const addCart = createAsyncThunk(
  "cart/addCart",
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axios.post("http://localhost:3001/cart",payload);
      return {product:response.data,id:payload.id};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (payload, {rejectWithValue}) => {
    try {
       await axios.delete(`http://localhost:3001/cart/${payload}`);
      console.log(payload);
      return payload
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  cart:[],
  product: "",
  errorAll: null,
  loadingAll: false,
  clickedShowLoding:[],
  clickedShowError:[],
  error:null,
};

export const cartSlice  = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending,(state,action)=>{
      return {...state,cart:[],loadingAll:true,errorAll:null}
    })
    builder.addCase(fetchCart.fulfilled,(state,action)=>{
      return {...state,cart:action.payload,loadingAll:false,errorAll:null}
    })
    builder.addCase(fetchCart.rejected,(state,action)=>{
      return {...state,cart:[],loadingAll:false,errorAll:action.payload.message}
    })
    builder.addCase(addCart.pending, (state, action) => {
      const updatedClickedShowError=state.clickedShowError.filter(cli=>cli!== action.meta.arg.id)
      return {...state,clickedShowError:updatedClickedShowError ,product: null,  error: null,clickedShowLoding:[...state.clickedShowLoding,action.meta.arg.id]};
    });
    builder.addCase(addCart.fulfilled, (state, action) => {
      const updatedClickedShowLoding=state.clickedShowLoding.filter(cli=>cli!== action.payload.id)
      const updatedClickedShowError=state.clickedShowError.filter(cli=>cli!== action.payload.id)
      return {...state, clickedShowError:updatedClickedShowError ,clickedShowLoding:updatedClickedShowLoding,product: action.payload.product, error: null,cart:[...state.cart,action.payload.product]};
    });
    builder.addCase(addCart.rejected, (state, action) => {
      const updatedClickedShowLoding=state.clickedShowLoding.filter(cli=>cli!== action.meta.arg.id)
      return {
        ...state,
        clickedShowLoding:updatedClickedShowLoding,
        product: null,
        clickedShowError:[...state.clickedShowError,action.meta.arg.id],
        error: action.payload.message,
      };
      
    });
    builder.addCase(deleteCart.pending, (state, action) => {
      const updatedClickedShowError=state.clickedShowError.filter(cli=>cli!== action.meta.arg)
      return {...state,clickedShowError:updatedClickedShowError , product: null, error: null,clickedShowLoding:[...state.clickedShowLoding,action.meta.arg]};
    });
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      const updatedCart = state.cart.filter((fav) => fav.id !== action.payload);
      const updatedClickedShowLoding=state.clickedShowLoding.filter(cli=>cli!== action.payload)
      const updatedClickedShowError=state.clickedShowError.filter(cli=>cli!== action.payload)
      return {...state,clickedShowError:updatedClickedShowError , clickedShowLoding:updatedClickedShowLoding ,product: null,  error: null,cart:updatedCart};
    });
    builder.addCase(deleteCart.rejected, (state, action) => {
      const updatedClickedShowLoding=state.clickedShowLoding.filter(cli=>cli!== action.meta.arg)
      return {
        ...state,
        clickedShowLoding:updatedClickedShowLoding,
        product: null,
        error: action.payload.message,
        clickedShowError:[...state.clickedShowError,action.meta.arg],
      };
    });
  },
});
export default cartSlice.reducer;