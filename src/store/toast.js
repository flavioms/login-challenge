import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'toast',
  initialState: {
    toasts: null,
  },
  reducers: {
    postToast: (state, action) => {
      state.toasts = [action.payload];
    },
    clearToast: (state) => {
      state.toasts = null;
    },
  },
});

const { postToast, clearToast } = slice.actions;

export const post = (data) => async (dispatch) => {
  dispatch(postToast(data));
  setTimeout(() => {
    dispatch(clearToast());
  }, 10 * 500);
  return null;
};

export const clear = () => async (dispatch) => {
  dispatch(clearToast());
  return null;
};

export default slice.reducer;
