import React, { useState, useEffect } from "react";
import classes from "./login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./loginSlice";
import { loginAction } from "./LoginActions";
import { useNavigate, useParams } from "react-router-dom";
import { getType } from "../../utils/commonUtils";

function LoginForm() {
  const [formData, setFormData] = useState({ emailId: "", password: "" });
  const dispatch = useDispatch();
  const loginSelector = useSelector((state) => state.login);
  const { loginError } = loginSelector || {};
  const { redirect } = useParams;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submit = async (event) => {
    event.preventDefault();
    await dispatch(loginAction(formData));
    const url = getType('type') == 'E' ? `/home`: '/job-listing'
      return navigate(url);
    
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
