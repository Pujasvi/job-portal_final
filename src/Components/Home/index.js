import React ,{Fragment} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../Login/loginSlice';
import { setDataInLocalStorage } from '../../utils/commonUtils';
import classes from './home.module.css';
import Employer from '../Employer'

function Home() {
  const dispatch = useDispatch();
  const logoutLocal= () =>{
      setDataInLocalStorage('user','')
      dispatch(logout())
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