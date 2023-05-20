import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchFavorite=createAsyncThunk("favorites/fetchFavorite", async(_,{rejectWithValue})=>{
  try {
   const data= await axios.get("http://localhost:3001/myFavorites");
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
 })
export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axios.post("http://localhost:3001/myFavorites",payload);
      return {favorites:response.data,id:payload.id};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  favorites:[],
  favorite: "",
  error: null,
  loding: false,
  clicked:null,
};

export const favoritesSlice  = createSlice({
  name: "favorites",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavorite.pending,(state,action)=>{
      return {...state,favorites:null,loding:true,error:null}
    })
    builder.addCase(fetchFavorite.fulfilled,(state,action)=>{
      return {...state,favorites:action.payload,loding:false,error:null}
    })
    builder.addCase(fetchFavorite.rejected,(state,action)=>{
      return {...state,favorites:null,loding:false,error:action.payload.message}
    })
    builder.addCase(addFavorite.pending, (state, action) => {
      return {...state, favorite: null, loding: true, error: null,clicked:action.meta.arg.id};
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      return {...state, favorite: action.payload.favorites, loding: false, error: null};
    });
    builder.addCase(addFavorite.rejected, (state, action) => {
      return {
        ...state,
        favorite: null,
        loding: false,
        error: action.payload.message,
      };
    });
  },
});
export default favoritesSlice.reducer;
