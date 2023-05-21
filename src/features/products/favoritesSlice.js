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
  clickedShowLoding:[],
  clickedShowError:[],
  error:null,
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
      const updatedClickedShowError=state.clickedShowError.filter(cli=>cli!== action.meta.arg.id)
      return {...state,clickedShowError:updatedClickedShowError ,favorite: null,  error: null,clickedShowLoding:[...state.clickedShowLoding,action.meta.arg.id]};
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      const updatedClickedShowLoding=state.clickedShowLoding.filter(cli=>cli!== action.payload.id)
      const updatedClickedShowError=state.clickedShowError.filter(cli=>cli!== action.payload.id)
      return {...state, clickedShowError:updatedClickedShowError ,clickedShowLoding:updatedClickedShowLoding,favorite: action.payload.favorite, error: null,favorites:[...state.favorites,action.payload.favorite]};
    });
    builder.addCase(addFavorite.rejected, (state, action) => {
      const updatedClickedShowLoding=state.clickedShowLoding.filter(cli=>cli!== action.meta.arg.id)
      return {
        ...state,
        clickedShowLoding:updatedClickedShowLoding,
        favorite: null,
        clickedShowError:[...state.clickedShowError,action.meta.arg.id],
        error: action.payload.message,
      };
      
    });
    builder.addCase(deleteFavorite.pending, (state, action) => {
      const updatedClickedShowError=state.clickedShowError.filter(cli=>cli!== action.meta.arg)
      return {...state,clickedShowError:updatedClickedShowError , favorite: null, error: null,clickedShowLoding:[...state.clickedShowLoding,action.meta.arg]};
    });
    builder.addCase(deleteFavorite.fulfilled, (state, action) => {
      const updatedFavorites = state.favorites.filter((fav) => fav.id !== action.payload);
      const updatedClickedShowLoding=state.clickedShowLoding.filter(cli=>cli!== action.payload)
      const updatedClickedShowError=state.clickedShowError.filter(cli=>cli!== action.payload)
      return {...state,clickedShowError:updatedClickedShowError , clickedShowLoding:updatedClickedShowLoding ,favorite: null,  error: null,favorites:updatedFavorites};
    });
    builder.addCase(deleteFavorite.rejected, (state, action) => {
      const updatedClickedShowLoding=state.clickedShowLoding.filter(cli=>cli!== action.meta.arg)
      return {
        ...state,
        clickedShowLoding:updatedClickedShowLoding,
        favorite: null,
        error: action.payload.message,
        clickedShowError:[...state.clickedShowError,action.meta.arg],
      };
    });
  },
});
export default favoritesSlice.reducer;
