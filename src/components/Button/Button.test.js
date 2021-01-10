import React from 'react';
import {
  render,
  screen,
  waitForElement,
  fireEvent,
} from '@testing-library/react';
import Theme from '~/styles/theme';
import Button from './index';

describe('Test Button component', () => {
  it('should render button', async () => {
    render(
      <Theme>
        <Button label='Cadastrar' testid='btn' onClick={() => jest.fn()} />
      </Theme>
    );
    const btnCadastrar = await waitForElement(() => screen.getByTestId('btn'));
    expect(btnCadastrar).toBeDefined();
  });

  it('should call the button action', async () => {
    const handleSubmit = jest.fn();
    render(
      <Theme>
        <Button label='Cadastrar' testid='btn' onClick={handleSubmit} />
      </Theme>
    );
    const btnCadastrar = await waitForElement(() => screen.getByTestId('btn'));
    expect(btnCadastrar).toBeDefined();

    fireEvent.click(btnCadastrar);

    expect(handleSubmit).toHaveBeenCalled();
  });

  it("shouldn't call the button action", async () => {
    const handleSubmit = jest.fn();
    render(
      <Theme>
        <Button
          label='Cadastrar'
          disabled
          testid='btn'
          onClick={handleSubmit}
        />
      </Theme>
    );
    const btnCadastrar = await waitForElement(() => screen.getByTestId('btn'));
    expect(btnCadastrar).toBeDefined();

    fireEvent.click(btnCadastrar);

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
