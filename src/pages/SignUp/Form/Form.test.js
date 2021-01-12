import React from 'react';
import {
  render,
  screen,
  waitForElement,
  fireEvent,
  wait,
} from '@testing-library/react';
import Theme from '~/styles/theme';
import Form from './index';

const handleSubmit = jest.fn();

describe('Test Form component', () => {
  it('should render inputs and button', async () => {
    render(
      <Theme>
        <Form handleSubmit={handleSubmit} />
      </Theme>
    );
    const fieldEmail = await waitForElement(() => screen.getByTestId('email'));
    expect(fieldEmail).toBeDefined();

    const fieldCPF = await waitForElement(() => screen.getByTestId('cpf'));
    expect(fieldCPF).toBeDefined();

    const fieldBirthday = await waitForElement(() =>
      screen.getByTestId('birthday')
    );
    expect(fieldBirthday).toBeDefined();

    const fieldPassword = await waitForElement(() =>
      screen.getByTestId('password')
    );
    expect(fieldPassword).toBeDefined();

    const fieldTerm = await waitForElement(() => screen.getByTestId('term'));
    expect(fieldTerm).toBeDefined();

    const btnSubmit = await waitForElement(() =>
      screen.getByTestId('btn-submit')
    );
    expect(btnSubmit).toBeDefined();
  });

  it('should submit data', async () => {
    const data = {
      email: 'teste@teste.com',
      name: 'teste',
      cpf: '999.999.999-99',
      birthday: '2021-01-08',
      password: '123456',
      term: true,
    };
    render(
      <Theme>
        <Form handleSubmit={handleSubmit} />
      </Theme>
    );

    const fieldEmail = await waitForElement(() => screen.getByTestId('email'));
    await wait(() => {
      fireEvent.change(fieldEmail, {
        target: {
          value: data.email,
        },
      });
    });
    expect(fieldEmail.value).toEqual(data.email);

    const fieldName = await waitForElement(() => screen.getByTestId('name'));
    await wait(() => {
      fireEvent.change(fieldName, {
        target: {
          value: data.name,
        },
      });
    });
    expect(fieldName.value).toEqual(data.name);

    const fieldCPF = await waitForElement(() => screen.getByTestId('cpf'));

    await wait(() => {
      fireEvent.change(fieldCPF, {
        target: {
          value: data.cpf,
        },
      });
    });
    expect(fieldCPF.value).toEqual(data.cpf);

    const fieldBirthday = await waitForElement(() =>
      screen.getByTestId('birthday')
    );
    await wait(() => {
      fireEvent.change(fieldBirthday, {
        target: {
          value: data.birthday,
        },
      });
    });
    expect(fieldBirthday.value).toEqual(data.birthday);

    const fieldPassword = await waitForElement(() =>
      screen.getByTestId('password')
    );
    await wait(() => {
      fireEvent.change(fieldPassword, {
        target: {
          value: data.password,
        },
      });
    });

    expect(fieldPassword.value).toEqual(data.password);

    const fieldTerm = await waitForElement(() => screen.getByTestId('term'));
    await wait(() => {
      fireEvent.click(fieldTerm);
    });
    expect(fieldTerm.checked).toEqual(true);

    const btnSubmit = await waitForElement(() =>
      screen.getByTestId('btn-submit')
    );
    await wait(() => {
      fireEvent.click(btnSubmit);
    });

    await wait(() =>
      expect(handleSubmit).toHaveBeenCalledWith(data, expect.anything())
    );
  });
});
