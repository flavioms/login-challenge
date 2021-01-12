import React from 'react';
import { render, screen, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '~/store';
import { post, clear } from '~/store/toast';
import Theme from '~/styles/theme';
import Toast from './index';

describe('Toast', () => {
  test('should add toast', () => {
    store.dispatch(clear());
    let state = store.getState().toast;
    expect(state.toasts).toBeNull();

    store.dispatch(post({ type: 'success', message: 'teste' }));
    state = store.getState().toast;

    expect(state.toasts).toEqual([{ type: 'success', message: 'teste' }]);
  });

  test('should clear toast', () => {
    store.dispatch(clear());
    let state = store.getState().toast;
    expect(state.toasts).toBeNull();

    store.dispatch(post({ type: 'success', message: 'teste' }));
    state = store.getState().toast;

    expect(state.toasts).toEqual([{ type: 'success', message: 'teste' }]);

    store.dispatch(clear());
    state = store.getState().toast;

    expect(state.toasts).toBeNull();
  });

  test('should render toast and show message', async () => {
    store.dispatch(clear());
    store.dispatch(post({ type: 'success', message: 'teste toast' }));
    render(
      <Provider store={store}>
        <Theme>
          <Toast />
        </Theme>
      </Provider>
    );

    const toastMessage = await waitForElement(() =>
      screen.getByText('teste toast')
    );

    expect(toastMessage).toBeDefined();
  });
});
