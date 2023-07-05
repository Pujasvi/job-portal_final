import { createAsyncThunk } from "@reduxjs/toolkit";
import { employerError, loading, success } from "./employerSlice";
import { checkIsLoggedIn } from "../../utils/commonUtils";
import { getEmployerDataApi } from "../../utils/networkUtils";

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