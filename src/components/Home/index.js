import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Login/loginSlice";
import { setDataInLocalStorage } from "../../utils/commonUtils";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Employer/sideNav/sideNav";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutLocal = () => {
    setDataInLocalStorage("user", "");
    dispatch(logout());
    navigate("/login");
    return;
  };
  return (
    <Fragment>
      <div className={classes.header}>
        <button type="button" onClick={logoutLocal}>
          Logout
        </button>
      </div>
      <Sidebar />
      {/* <EmployerRoutes/> */}
    </Fragment>
  );
}

export default Home;
