import React ,{Fragment} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../Login/loginSlice';
import { setDataInLocalStorage } from '../../utils/commonUtils';
import classes from './home.module.css';
import Employer from '../Employer'
import { useNavigate, useParams } from "react-router-dom";

function Home() {
  const loginSelector = useSelector((state) => state.login); 
  const dispatch = useDispatch();
  const navigate =useNavigate();
  console.log(loginSelector.isLoggedIn)

  const logoutLocal= () =>{
      setDataInLocalStorage('user','')
      dispatch(logout())
      navigate('/login');
      return;
  }
  return (
    <Fragment>
    <div className={classes.header}>
    <button type='button' onClick={logoutLocal}> Logout </button>
    </div>  
   
    <Employer/>
    </Fragment>
  )
}

export default Home