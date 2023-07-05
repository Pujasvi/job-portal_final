import React, { useState,useEffect } from "react";
import classes from "./login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./loginSlice";
import { loginAction } from "./LoginActions";
import { useNavigate, useParams } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({ emailId: "", password: "" });
  const dispatch = useDispatch();
  const loginSelector = useSelector((state) => state.login);
  const { loginError ,isLoggedIn} = loginSelector || {};
  const { redirect } = useParams;
  const navigate = useNavigate();
  useEffect(()=>{
    if(isLoggedIn){
    if (redirect) {
      return navigate(`/${redirect}`);
    }else{
      return navigate(`/home`);
    }
  }
  },[])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submit = async (event) => {
    event.preventDefault();
    dispatch(loginAction(formData));
    if (redirect) {
      console.log("if",redirect)
      return navigate(`/${redirect}`);
    }else{
      console.log("else")
      return navigate(`/home`);
    }

    console.log("formdata", formData);
    return false;
  };
  return (
    <form
      className={classes.form}
      onSubmit={(event) => {
        return false;
      }}
    >
      <label htmlFor="emailId" />
      <input
        type="emailId"
        id="emailId"
        name="emailId"
        value={formData["emailId"]}
        onChange={handleChange}
        placeholder="Enter Email"
      />

      <label htmlFor="password" />
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <button type="button" onClick={submit}>
        Submit
      </button>
      <div>
        <span className={classes.error}>{loginError}</span>
      </div>
    </form>
  );
}

export default LoginForm;
