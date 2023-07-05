import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../utils/networkUtils";
import { checkIsLoggedIn } from "../../utils/commonUtils";
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isLoggedIn: !isEmpty(checkIsLoggedIn()) ? true : false,
  loginError :'' ,
  isLoading:false,
  userType :''
};

export const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    login: (state,action) => {
      state.isLoading=false;
      state.isLoggedIn = true;
      state.loginError = '';
      state.userType = action.payload.type;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    loginError :(state,action)=>{
      state.isLoading=false;
      state.loginError =action.payload.message;
    },
    loading :(state)=>{
      state.loginError='';
      state.isLoading=true;
      state.isLoggedIn =false;
    },
  },
});
export const { login, logout ,loginError ,loading } = loginSlice.actions;


export default loginSlice.reducer;
