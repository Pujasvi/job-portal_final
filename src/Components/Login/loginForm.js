import React, { useState } from 'react'
import classes from './login.module.css'
function LoginForm() {
  const [formData ,setFormData] = useState({emailId:'', password :''});

  const handleChange = (event) => {
    console.log("pujasvi event",event.target.name)
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const Submit = ()=>{
      
      console.log('formdata',formData)
      return formData;
  }
  return (
    <form className={classes.form}>
      <label htmlFor="emailId"/>
      <input type="emailId" id="emailId" name="emailId" value={formData['emailId']} onChange={handleChange} placeholder='Enter Email'/>

      <label htmlFor="password"/>
      <input type="password" id="password" name="password" value={formData.password} placeholder='Enter Password' onChange={handleChange}/>

      <button type="submit" onClick={Submit}>Submit</button>
    </form>
  )
}

export default LoginForm