import { login } from "../Components/Login/loginSlice";
import { users } from "../dummyData/users";
import { loginApi } from "./networkUtils"
import { useSelector, useDispatch } from "react-redux";

const loginUser = async(data)=>{
    const res =await loginApi(data);
}
export const addDatainDB = (data)=>{
  users.push({emailId:data?.emailId,password:data?.password,type:data?.type})
}

export const isValidEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const isValidPhoneNumber = (phoneNumber) => {
  // Regular expression for phone number validation
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
};