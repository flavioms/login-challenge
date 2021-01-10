import React from 'react';
import {
  render,
  screen,
  waitForElement,
  fireEvent,
  wait,
} from '@testing-library/react';
import Theme from '~/styles/theme';
import Input from './index';

describe('Test Form component', () => {
  it('should render input', async () => {
    render(
      <Theme>
        <Input
          id='name'
          name='name'
          testid='name'
          type='text'
          label='Name:'
          onChange={() => jest.fn()}
        />
      </Theme>
    );
    const fieldName = await waitForElement(() => screen.getByTestId('name'));
    expect(fieldName).toBeDefined();
  });

  it('should render input and show error', async () => {
    render(
      <Theme>
        <Input
          id='name'
          name='name'
          testid='name'
          type='text'
          label='Name:'
          error='Required field'
          onChange={() => jest.fn()}
        />
      </Theme>
    );
    const fieldName = await waitForElement(() => screen.getByTestId('name'));
    expect(fieldName).toBeDefined();
    const spanError = await waitForElement(() =>
      screen.getByText('Required field')
    );
    expect(spanError).toBeDefined();
  });

  it('should render input mask', async () => {
    let value = '';
    const handleChange = (e) => {
      value = e.target.value;
    };
    render(
      <Theme>
        <Input
          id='cpf'
          name='cpf'
          testid='cpf'
          type='text'
          mask='999.999.999-99'
          label='CPF:'
          onChange={handleChange}
        />
      </Theme>
    );
    const fieldCPF = await waitForElement(() => screen.getByTestId('cpf'));
    expect(fieldCPF).toBeDefined();
    await wait(() => {
      fireEvent.change(fieldCPF, {
        target: {
          value: '14414414411',
        },
      });
    });
    expect(value).toEqual('144.144.144-11');
  });
});
