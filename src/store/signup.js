import { createSlice } from '@reduxjs/toolkit';
import { post as postToast } from '~/store/toast';

const slice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
  },
  reducers: {
    postSignupRequest: (state) => {
      state.loading = true;
    },
    postSignupSuccess: (state) => {
      state.loading = false;
    },
    postSignupFailure: (state) => {
      state.loading = false;
    },
  },
});

const {
  postSignupRequest,
  postSignupSuccess,
  postSignupFailure,
} = slice.actions;

export const postSignup = () => async (dispatch) => {
  try {
    dispatch(postSignupRequest());
    // CALL API await api.post('/signup', data);
    dispatch(postSignupSuccess());
    dispatch(
      postToast({
        type: 'success',
        message: 'Parabéns! Cadastro realizado com sucesso!',
      })
    );
    return null;
  } catch (error) {
    dispatch(postSignupFailure());
    dispatch(
      postToast({
        type: 'error',
        message: 'Ops! Algo deu errado.',
      })
    );
    return null;
  }
};

export default slice.reducer;
