import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import loginReducer  from '../Components/Login/loginSlice'
export const store = configureStore({
  reducer: {
    login:loginReducer
  },
})