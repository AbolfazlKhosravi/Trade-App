import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataDailyAnalysis = createAsyncThunk(
  "dailyAnalysis/fetchDataDailyAnalysis",
  async (_, {rejectWithValue}) => {
    try {
      const data = await axios.get(
        "https://khosravitradapp.glitch.me/dailyAnalysis"
      );
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const multipleFilterAsynchDaulyAnalysis = createAsyncThunk(
  "DaulyAnalysis/multipleFilterAsynchDaulyAnalysis",
  async (payload, {rejectWithValue}) => {
    try {
      const data = await axios.get(
        "https://khosravitradapp.glitch.me/dailyAnalysis"
      );
      return {dailyAnalysis: data.data, filter: payload};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchDatadailyAnalyse=createAsyncThunk("dailyAnalysis/fetchDatadailyAnalyse", async(payload,{rejectWithValue})=>{
  try {
   const data= await axios.get(`https://khosravitradapp.glitch.me/dailyAnalysis/${payload.id}`);
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
 })
export const sendCommintDailyAnalyse=createAsyncThunk("dailyAnalysis/sendCommint", async(payload,{rejectWithValue})=>{
  try {
   const data= await axios.patch(`https://khosravitradapp.glitch.me/dailyAnalysis/${payload.id}`,payload.commints);
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
 })
 export const sendReplayDailyAnalyse=createAsyncThunk("dailyAnalysis/sendReplay", async(payload,{rejectWithValue})=>{
  try {
   const data= await axios.patch(`https://khosravitradapp.glitch.me/dailyAnalysis/${payload.id}`,payload.commints);
   return data.data
  } catch (error) {
   return rejectWithValue(error)
  }
 })

const initialState = {
  data: [],
  error: null,
  loding: false,
  dailyAnalyse:null,
  errorSendCommint:null,
  lodingSendCommint:null,
  errorSendReplay:null,
  lodingSendReplay:null,
};

export const dailyAnalysisSlice = createSlice({
  name: "dailyAnalyses",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDataDailyAnalysis.pending, (state, action) => {
      return {...state, data: null, loding: true, error: null};
    });
    builder.addCase(fetchDataDailyAnalysis.fulfilled, (state, action) => {
      return {...state, data: action.payload, loding: false, error: null};
    });
    builder.addCase(fetchDataDailyAnalysis.rejected, (state, action) => {
      return {
        ...state,
        data: null,
        loding: false,
        error: action.payload.message,
      };
    });
    builder.addCase(multipleFilterAsynchDaulyAnalysis.pending, (state, action) => {
      return {...state, data: null, loding: true, error: null};
    });
    builder.addCase(multipleFilterAsynchDaulyAnalysis.fulfilled, (state, action) => {
      let filterdData = action.payload.dailyAnalysis.filter((p) => {
        return p.title
          .toLowerCase()
          .includes(action.payload.filter.search.toLowerCase());
      });

      if (action.payload.filter.filrerPrice !== "") {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filrerPrice === "free") {

            return p.price === 0;
          } else {
            return p.price !== 0;
          }
        });
      }

      if (action.payload.filter.filrerInstuctor !== "") {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filrerInstuctor === "warrenBuffett") {
            return p.instuctorId === "warrenBuffett";
          } else {
            return p.instuctorId === "jasonHardy";
          }
        });
      }

      if (action.payload.filter.filterRecordingStatus !== null) {
        filterdData = filterdData.filter((p) => {
          if (action.payload.filter.filterRecordingStatus === "true") {
            return p.recordingStatus;
          } else {
            return !p.recordingStatus;
          }
        });
      }
      filterdData = filterdData.filter((p) => {
        return (
          parseFloat(p.rate) >= parseFloat(action.payload.filter.filterRating)
        );
      });

      return {...state, data: filterdData, loding: false, error: null};
    });
    builder.addCase(multipleFilterAsynchDaulyAnalysis.rejected, (state, action) => {
      return {
        ...state,
        data: null,
        loding: false,
        error: action.payload.message,
      };
    });
    builder.addCase(fetchDatadailyAnalyse.pending,(state,action)=>{
      return {...state,dailyAnalyse:null,loding:true,error:null}
    })
    builder.addCase(fetchDatadailyAnalyse.fulfilled,(state,action)=>{
      return {...state,dailyAnalyse:action.payload,loding:false,error:null}
    })
    builder.addCase(fetchDatadailyAnalyse.rejected,(state,action)=>{
      return {...state,dailyAnalyse:null,loding:false,error:action.payload.message}
    })
    builder.addCase(sendCommintDailyAnalyse.pending,(state,action)=>{
      return {...state,lodingSendCommint:true,errorSendCommint:null}
    })
    builder.addCase(sendCommintDailyAnalyse.fulfilled,(state,action)=>{
      return {...state,dailyAnalyse:action.payload,lodingSendCommint:false,errorSendCommint:null}
    })
    builder.addCase(sendCommintDailyAnalyse.rejected,(state,action)=>{
      return {...state,lodingSendCommint:false,errorSendCommint:action.payload.message}
    })
    builder.addCase(sendReplayDailyAnalyse.pending,(state,action)=>{
      return {...state,lodingSendReplay:true,errorSendReplay:null}
    })
    builder.addCase(sendReplayDailyAnalyse.fulfilled,(state,action)=>{
      return {...state,dailyAnalyse:action.payload,lodingSendReplay:false,errorSendReplay:null}
    })
    builder.addCase(sendReplayDailyAnalyse.rejected,(state,action)=>{
      return {...state,lodingSendReplay:false,errorSendReplay:action.payload.message}
    })
  },
});
export default dailyAnalysisSlice.reducer;
