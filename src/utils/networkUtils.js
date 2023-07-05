import { users } from "../dummyData/users";
import {dummyEmployers} from '../dummyData/employers'
import { checkIsLoggedIn } from "./commonUtils";


export const loginApi = (obj) => {
  console.log(users)
  return new Promise((res, rej) => {
    setTimeout(() => {
        const data =  users?.filter((user)=>{
          if(user.id ==="101"){console.log(user)}
            return user?.emailId === obj?.emailId && user.password === obj?.password
        })
        console.log("puj data",data,data.length,obj)
        if(!data?.length) { 
          res({status:401,message:'Email/Password incorrect'})
        }
        console.log(data)
      res({status:200,data});
    }, 100);
  })
  
};
export const signupApi = (obj) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
        const data =  users?.find((user)=>{
            return user?.emailId === obj?.emailId
        })
        console.log("puj data",data)
        if(data?.length) { 
          res ({status:409,message:'User already exists'})
        }
        console.log(data)
      res({status:200,message:'Signup Succesfully'});
    }, 100);
  })
  
};
export const getEmployerDataApi = (obj) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
        const emp = dummyEmployers.concat([]);
        console.log("pujasvi emp",emp)
        if(emp?.length) { 
          res ({status:200,data:emp})
        }
      res({status:403,message:'Data Not found'});
    }, 100);
  })
  
};
