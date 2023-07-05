import React ,{useEffect} from 'react'
import classes from './index.module.css'
import { useSelector, useDispatch } from "react-redux";
import { getEmployerData } from './employerAction';

const  Employer = ()=> {
  const employerSelector = useSelector((state) => state.employer);
  console.log("***",employerSelector);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getEmployerData())
  },[])
  return (
    <div className={classes.wrapper}>

    </div>
  )
}

export default Employer