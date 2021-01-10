import React from 'react';
import {
  render,
  screen,
  waitForElement,
  fireEvent,
} from '@testing-library/react';
import Theme from '~/styles/theme';
import Confirm from './index';

describe('Test Confirm component', () => {
  it('should render confirm', async () => {
    render(
      <Theme>
        <Confirm
          id='term'
          name='term'
          testid='term'
          value={false}
          text='Sed non lacus sit amet lacus venenatis tempus.'
          onChange={() => jest.fn()}
        />
      </Theme>
    );
    const fieldTerm = await waitForElement(() => screen.getByTestId('term'));
    expect(fieldTerm).toBeDefined();
  });

  it('should mark confirm', async () => {
    let value = false;
    const handleChange = () => {
      value = true;
    };
    render(
      <Theme>
        <Confirm
          id='term'
          name='term'
          testid='term'
          value={value}
          text='Sed non lacus sit amet lacus venenatis tempus.'
          onChange={handleChange}
        />
      </Theme>
    );
    const fieldTerm = await waitForElement(() => screen.getByTestId('term'));
    expect(fieldTerm).toBeDefined();

    expect(value).toEqual(false);

    fireEvent.click(fieldTerm);

    expect(value).toEqual(true);
  });

  it('should render error', async () => {
    render(
      <Theme>
        <Confirm
          id='term'
          name='term'
          testid='term'
          value={false}
          error='Required field'
          text='Sed non lacus sit amet lacus venenatis tempus.'
          onChange={() => jest.fn()}
        />
      </Theme>
    );
    const fieldTerm = await waitForElement(() => screen.getByTestId('term'));
    expect(fieldTerm).toBeDefined();

    const spanError = await waitForElement(() =>
      screen.getByText('Required field')
    );
    expect(spanError).toBeDefined();
  });
});
