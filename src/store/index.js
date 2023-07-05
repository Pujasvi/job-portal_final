import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginSlice from "../components/Login/loginSlice";
import employerSlice from "../components/Employer/employerSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

export const store = configureStore({
  reducer: {
    login:loginSlice,
    employer:employerSlice
  },
})
// const rootReducer = combineReducers({
//   login: loginSlice,
//   employer: employerSlice,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
