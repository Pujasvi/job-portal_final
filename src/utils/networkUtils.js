import { users } from "../dummyData/users";
import { dummyEmployers } from "../dummyData/employers";

export const loginApi = (obj) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = users?.filter((user) => {
        return (
          user?.emailId === obj?.emailId && user.password === obj?.password
        );
      });
      if (!data?.length) {
        res({ status: 401, message: "Email/Password incorrect" });
      }
      res({ status: 200, data });
    }, 100);
  });
};
export const signupApi = (obj) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = users?.find((user) => {
        return user?.emailId === obj?.emailId;
      });

      if (data?.length) {
        res({ status: 409, message: "User already exists" });
      }

      res({ status: 200, message: "Signup Succesfully" });
    }, 100);
  });
};
export const getEmployerDataApi = (obj) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const emp = dummyEmployers.concat([]);
      if (emp?.length) {
        res({ status: 200, data: emp });
      }
      res({ status: 403, message: "Data Not found" });
    }, 100);
  });
};
