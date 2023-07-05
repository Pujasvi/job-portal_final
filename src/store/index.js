import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import loginReducer  from '../Components/Login/loginSlice'
import employerSlice from '../Components/Employer/employerSlice'
export const store = configureStore({
  reducer: {
    login:loginReducer,
    employer:employerSlice
  },
})