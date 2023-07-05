import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "../../utils/networkUtils";
import { loading, login, loginError } from "./loginSlice";
import { setDataInLocalStorage } from "../../utils/commonUtils";
import { users } from "../../dummyData/users";
import { addDatainDB } from "../../utils/utils";

export const loginAction = createAsyncThunk(
  "user/loginApi",
  async (data, { dispatch }) => {
    try {
      dispatch(loading());
      const res = await loginApi(data);
      if (res.status == 200) {
        dispatch(login(res.data[0]));
        setDataInLocalStorage("user", res.data[0].emailId);
        return;
      }
      dispatch(loginError(res));
    } catch (e) {
      dispatch(loginError(e));
      console.log("pujasvi ", e);
    }
  }
);

export const signupAction = createAsyncThunk(
  "user/signupApi",
  async (data, { dispatch }) => {
    try {
      dispatch(loading());
      const res = await signupApi(data);
      console.log("pujasvi signup res",res)
      if (res?.status == 200) {
        alert('Signup successfully')
        dispatch(login(data));
        {/* add in dummy db */}
        addDatainDB(data)  
        setDataInLocalStorage("user", data.emailId);
        return;
      }
      dispatch(loginError(res));
    } catch (e) {
      dispatch(loginError(e));
      console.log("pujasvi ", e);
    }
  }
);
