import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, {rejectWithValue}) => {
    try {
      const data = await axios.get("https://khosravitradapp.glitch.me/cart");
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addCart = createAsyncThunk(
  "cart/addCart",
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        "https://khosravitradapp.glitch.me/cart",
        payload
      );
      return {product: response.data, id: payload.id};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (payload, {rejectWithValue}) => {
    try {
      await axios.delete(`https://khosravitradapp.glitch.me/cart/${payload}`);
      console.log(payload);
      return payload;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const inCreaseNumberProudctsCart = createAsyncThunk(
  "cart/inCreaseNumberProudctsCart",
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axios.patch(
        `https://khosravitradapp.glitch.me/cart/${payload.id}`,
        payload
      );
      return {product: response.data, id: payload.id};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  cart: [],
  product: "",
  errorAll: null,
  loadingAll: false,
  clickedShowLoding: [],
  clickedShowError: [],
  errorCart: null,
  clickedShowLodingIncreaseNumber: [],
  clickedShowErrorIncreaseNumber: [],
  errorCartIncreasNumber: null,
  checkedAddedToThecard: null,
  checkedRemovedToThecard: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state, action) => {
      return {
        ...state,
        cart: [],
        loadingAll: true,
        errorAll: null,
        checkedAddedToThecard: null,
        checkedRemovedToThecard: null,
      };
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return {
        ...state,
        cart: action.payload,
        loadingAll: false,
        errorAll: null,
      };
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      return {
        ...state,
        cart: [],
        loadingAll: false,
        errorAll: action.payload.message,
      };
    });
    builder.addCase(addCart.pending, (state, action) => {
      const updatedClickedShowError = state.clickedShowError.filter(
        (cli) => cli !== action.meta.arg.id
      );
      return {
        ...state,
        checkedAddedToThecard: null,
        checkedRemovedToThecard: null,
        clickedShowError: updatedClickedShowError,
        product: null,
        errorCart: null,
        clickedShowLoding: [...state.clickedShowLoding, action.meta.arg.id],
      };
    });
    builder.addCase(addCart.fulfilled, (state, action) => {
      const updatedClickedShowLoding = state.clickedShowLoding.filter(
        (cli) => cli !== action.payload.id
      );
      const updatedClickedShowError = state.clickedShowError.filter(
        (cli) => cli !== action.payload.id
      );
      return {
        ...state,
        checkedRemovedToThecard: null,
        checkedAddedToThecard: action.payload.id,
        clickedShowError: updatedClickedShowError,
        clickedShowLoding: updatedClickedShowLoding,
        product: action.payload.product,
        errorCart: null,
        cart: [...state.cart, action.payload.product],
      };
    });
    builder.addCase(addCart.rejected, (state, action) => {
      const updatedClickedShowLoding = state.clickedShowLoding.filter(
        (cli) => cli !== action.meta.arg.id
      );
      return {
        ...state,
        clickedShowLoding: updatedClickedShowLoding,
        product: null,
        checkedRemovedToThecard: null,
        checkedAddedToThecard: action.meta.arg.id,
        clickedShowError: [...state.clickedShowError, action.meta.arg.id],
        errorCart: action.payload.message,
      };
    });
    builder.addCase(deleteCart.pending, (state, action) => {
      const updatedClickedShowError = state.clickedShowError.filter(
        (cli) => cli !== action.meta.arg
      );
      return {
        ...state,
        checkedAddedToThecard: null,
        checkedRemovedToThecard: null,
        clickedShowError: updatedClickedShowError,
        product: null,
        errorCart: null,
        clickedShowLoding: [...state.clickedShowLoding, action.meta.arg],
      };
    });
    builder.addCase(deleteCart.fulfilled, (state, action) => {
      const updatedCart = state.cart.filter((fav) => fav.id !== action.payload);
      const updatedClickedShowLoding = state.clickedShowLoding.filter(
        (cli) => cli !== action.payload
      );
      const updatedClickedShowError = state.clickedShowError.filter(
        (cli) => cli !== action.payload
      );
      return {
        ...state,
        checkedAddedToThecard: null,
        clickedShowError: updatedClickedShowError,
        checkedRemovedToThecard: action.payload,
        clickedShowLoding: updatedClickedShowLoding,
        product: null,
        errorCart: null,
        cart: updatedCart,
      };
    });
    builder.addCase(deleteCart.rejected, (state, action) => {
      const updatedClickedShowLoding = state.clickedShowLoding.filter(
        (cli) => cli !== action.meta.arg
      );
      return {
        ...state,
        clickedShowLoding: updatedClickedShowLoding,
        product: null,
        checkedRemovedToThecard: action.meta.arg,
        errorCart: action.payload.message,
        checkedAddedToThecard: null,
        clickedShowError: [...state.clickedShowError, action.meta.arg],
      };
    });
    builder.addCase(inCreaseNumberProudctsCart.pending, (state, action) => {
      const updatedClickedShowError =
        state.clickedShowErrorIncreaseNumber.filter(
          (cli) => cli !== action.meta.arg.id
        );
      return {
        ...state,
        clickedShowErrorIncreaseNumber: updatedClickedShowError,
        product: null,
        errorCartIncreasNumber: null,
        clickedShowLodingIncreaseNumber: [
          ...state.clickedShowLodingIncreaseNumber,
          action.meta.arg.id,
        ],
      };
    });
    builder.addCase(inCreaseNumberProudctsCart.fulfilled, (state, action) => {
      const updatedClickedShowLoding =
        state.clickedShowLodingIncreaseNumber.filter(
          (cli) => cli !== action.payload.id
        );
      const updatedClickedShowError =
        state.clickedShowErrorIncreaseNumber.filter(
          (cli) => cli !== action.payload.id
        );
        const index=state.cart.findIndex((p)=>p.id===action.payload.id)
        const product={...state.cart[index]}
        product.quantity = action.payload.product.quantity;
        const updateCart=[...state.cart]
        updateCart[index]=product
      return {
        ...state,
        clickedShowErrorIncreaseNumber: updatedClickedShowError,
        clickedShowLodingIncreaseNumber: updatedClickedShowLoding,
        product: action.payload.product,
        errorCartIncreasNumber: null,
        cart: updateCart,
      };
    });
    builder.addCase(inCreaseNumberProudctsCart.rejected, (state, action) => {
      const updatedClickedShowLoding=state.clickedShowLodingIncreaseNumber.filter(cli=>cli!== action.meta.arg.id)
      return {
        ...state,
        clickedShowLodingIncreaseNumber:updatedClickedShowLoding,
        product: null,
        clickedShowErrorIncreaseNumber:[...state.clickedShowErrorIncreaseNumber,action.meta.arg.id],
        errorCartIncreasNumber: action.payload.message,
      };

    });
  },
});
export default cartSlice.reducer;
