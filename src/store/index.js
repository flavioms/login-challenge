import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toast';
import singupReducer from './singup';

export default configureStore({
  reducer: {
    toast: toastReducer,
    singup: singupReducer,
  },
});
