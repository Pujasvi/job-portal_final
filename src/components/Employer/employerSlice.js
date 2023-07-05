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
    
  },
});
export const { success,employerError ,loading } = employerSlice.actions;


export default employerSlice.reducer;
