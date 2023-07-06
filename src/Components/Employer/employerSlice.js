import { createSlice } from "@reduxjs/toolkit";
import isEmpty from 'lodash/isEmpty';

const initialState = {
  employerData: [],
  employerError :'' ,
  isLoading:false
};

export const employerSlice = createSlice({
  name: "Employer",
  initialState,
  reducers: {
    success: (state ,action) => {
      state.employerData= action.payload;
      state.isLoading = false;
      state.employerError = '';
    },
    employerError :(state,action)=>{
      state.isLoading=false;
      state.employerError =action.payload.message;
    },
    loading :(state)=>{
      state.employerError='';
      state.isLoading=true;
    },
    postJob : (state,action)=>{
      state.employerData = state.employerData.concat({...action.payload.employerData ,id:state?.employerData?.length});
      state.isLoading = false;
      state.employerError = '';
      console.log("pujasvi empluterdata",state.employerData)
    }

  },
});
export const { success,employerError ,loading ,postJob } = employerSlice.actions;


export default employerSlice.reducer;
