import React,{useState,} from 'react';
import classes from './login.module.css';
import ErrorMessageStrip from '../../common/errorMessageStrip';
import isEmpty from 'lodash/isEmpty';
import { useDispatch } from "react-redux";
import { signupAction } from './LoginActions';

function SignupForm(props) {
  const [formData ,setFormData] = useState({emailId:'',type :'', password :'',cPassword:''});
  const {password,cPassword}= formData || {};
  const dispatch = useDispatch();
  let isNotSamePassword;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submit = (event)=>{
        event.preventDefault()
       isNotSamePassword = !isEmpty(cPassword) &&  (password != cPassword);
       if(isNotSamePassword)return ; 
      console.log('formdata',formData)
      dispatch(signupAction(formData))
      // return formData;
  }


  isNotSamePassword = !isEmpty(cPassword) &&  (password != cPassword);
  console.log("pujasvi ",!isEmpty(cPassword),password,cPassword)
  return (
    <form className={classes.form}>
      <label htmlFor="emailId"/>
      <input type="emailId" id="emailId" name="emailId" value={formData['emailId']} onChange={handleChange} placeholder='Enter Email'/>

      <select onChange={handleChange} name="type">
        <option value ='F'>FreeLancer</option>
        <option value='E'>Employer</option>
      </select>

      <label htmlFor="password"/>
      <input type="password" id="password" name="password" value={formData.password} placeholder='Enter Password' onChange={handleChange}/>

      <label htmlFor="password"/>
      <input type="password" id="cPassword" name="cPassword" value={formData.cPassword} placeholder='Confirm Password' onChange={handleChange}/>
      {isNotSamePassword &&  <ErrorMessageStrip error={"passwords are not same"}/>}
      <button  onClick={submit} type="button">Submit</button>
    </form>
  )
}
export default SignupForm
