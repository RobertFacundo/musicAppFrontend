import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../../features/auth/store/authSlice';
import themeReducer from '../redux/themeSlice'

export const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
})