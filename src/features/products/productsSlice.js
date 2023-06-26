
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
export const multipleFilterAsynchStore = createAsyncThunk(
  "Store/multipleFilterAsynchStore",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.get(
        "https://khosravitradapp.glitch.me/products"
      );
      return {products: data.data, filter: payload};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchDataProduct=createAsyncThunk("Products/fetchDataProduct", async(payload,{rejectWithValue})=>{
  try {
   const data= await axios.get(`https://khosravitradapp.glitch.me/products/${payload.id}`);
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
 })

const initialState = {
  data:[],
  error:null,
  loding:false,
  product:null
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
    builder.addCase(multipleFilterAsynchStore.pending, (state, action) => {
      return {...state, data: null, loding: true, error: null};
    });
    builder.addCase(multipleFilterAsynchStore.fulfilled, (state, action) => {
      let filterdData = action.payload.products.filter((p) => {
        return p.name
          .toLowerCase()
          .includes(action.payload.filter.search.toLowerCase());
      });

      if (action.payload.filter.filrerPrice !== "") {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filrerPrice === "discount") {

            return p.price !==p.discountedPrice;
          } else {
            return p.price === p.discountedPrice;
          }
        });
      }
     
      filterdData = filterdData.filter((p) => {
        return (
          parseFloat(p.rate) >= parseFloat(action.payload.filter.filterRating)
        );
      });
      console.log(action.payload.filter.rangePrice);
      
      filterdData = filterdData.filter((p) => {
        return (
          parseFloat(action.payload.filter.rangePrice[0]) <= parseFloat(p.discountedPrice) &&
          parseFloat(p.discountedPrice) <= parseFloat(action.payload.filter.rangePrice[1])
        );
      });

      return {...state, data: filterdData, loding: false, error: null};
    });
    builder.addCase(multipleFilterAsynchStore.rejected, (state, action) => {
      return {
        ...state,
        data: null,
        loding: false,
        error: action.payload.message,
      };
    });
    builder.addCase(fetchDataProduct.pending,(state,action)=>{
      return {...state,product:null,loding:true,error:null}
    })
    builder.addCase(fetchDataProduct.fulfilled,(state,action)=>{
      return {...state,product:action.payload,loding:false,error:null}
    })
    builder.addCase(fetchDataProduct.rejected,(state,action)=>{
      return {...state,product:null,loding:false,error:action.payload.message}
    })
  }
})
export default productsSlice.reducer;