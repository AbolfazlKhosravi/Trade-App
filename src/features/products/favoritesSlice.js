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
      return {favorite:response.data,id:payload.id};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteFavorite = createAsyncThunk(
  "favorites/deleteFavorite",
  async (payload, {rejectWithValue}) => {
    try {
       await axios.delete(`http://localhost:3001/myFavorites/${payload}`);
      console.log(payload);
      return payload
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  favorites:[],
  favorite: "",
  errorAll: null,
  loadingAll: false,
  clicked:null,
  error:null,
  loading:false,
};

export const favoritesSlice  = createSlice({
  name: "favorites",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavorite.pending,(state,action)=>{
      return {...state,favorites:[],loadingAll:true,errorAll:null}
    })
    builder.addCase(fetchFavorite.fulfilled,(state,action)=>{
      return {...state,favorites:action.payload,loadingAll:false,errorAll:null}
    })
    builder.addCase(fetchFavorite.rejected,(state,action)=>{
      return {...state,favorites:[],loadingAll:false,errorAll:action.payload.message}
    })
    builder.addCase(addFavorite.pending, (state, action) => {
      return {...state, favorite: null, loading: true, error: null,clicked:action.meta.arg.id};
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      return {...state, favorite: action.payload.favorite, loading: false, error: null,favorites:[...state.favorites,action.payload.favorite]};
    });
    builder.addCase(addFavorite.rejected, (state, action) => {
      return {
        ...state,
        favorite: null,
        loading: false,
        error: action.payload.message,
      };
    });
    builder.addCase(deleteFavorite.pending, (state, action) => {
      return {...state, favorite: null, loading: true, error: null,clicked:action.meta.arg};
    });
    builder.addCase(deleteFavorite.fulfilled, (state, action) => {
      const updatedFavorites = state.favorites.filter((fav) => fav.id !== action.payload);
      return {...state, favorite: null, loading: false, error: null,favorites:updatedFavorites};
    });
    builder.addCase(deleteFavorite.rejected, (state, action) => {
      return {
        ...state,
        favorite: null,
        loading: false,
        error: action.payload.message,
      };
    });
  },
});
export default favoritesSlice.reducer;
