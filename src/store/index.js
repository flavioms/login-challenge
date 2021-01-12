import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toast';
import signupReducer from './signup';

export default configureStore({
  reducer: {
    toast: toastReducer,
    signup: signupReducer,
  },
});
