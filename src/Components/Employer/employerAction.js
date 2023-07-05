import { createAsyncThunk } from "@reduxjs/toolkit";
import { employerError, loading, postJob, success } from "./employerSlice";
import { checkIsLoggedIn } from "../../utils/commonUtils";
import { getEmployerDataApi } from "../../utils/networkUtils";
import { dummyEmployers } from "../../dummyData/employers";

export const getEmployerData = createAsyncThunk(
  "user/getEmployerDataApi",
  async (data, { dispatch }) => {
    try {
      dispatch(loading());
      const res = await getEmployerDataApi(checkIsLoggedIn());
      if (res.status == 200) {
        dispatch(success(res.data));
        return;
      }
      dispatch(employerError(res.message));
    } catch (e) {
      dispatch(employerError(e));
    }
  }
);
export const postJobs = createAsyncThunk(
  "user/postJobsApi",
  async (data, { dispatch }) => {
    try {
      console.log("pujasvi ",data)
      dispatch(loading());
      setTimeout(()=>{
          dispatch(postJob({...data}));
      },100)
    } catch (e) {
      dispatch(employerError("error adding job"));
    }
  }
); 