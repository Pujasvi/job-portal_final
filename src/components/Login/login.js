import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./loginSlice";
import styles from "./login.module.css";
import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import { useNavigate, useParams } from "react-router-dom";

function Login() {
  const [type, setType] = useState("Login");

  const toggle = (e) => {
    if (e == "Login") {
      setType("Login");
    } else {
      setType("Signup");
    }
  };
  const sliderCss =
    type == "Signup"
      ? `${styles.slider} ${styles.moveslider}`
      : `${styles.slider}`;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.heading}>JOB PORTAL</span>
        <div className={sliderCss}></div>
        <div className={styles.btn}>
          <button className={styles.login} onClick={() => toggle("Login")}>
            Login
          </button>
          <button className={styles.signup} onClick={() => toggle("Signup")}>
            Signup
          </button>
        </div>
        <div className={styles.forms}>
          {type == "Login" ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
}

export default Login;
