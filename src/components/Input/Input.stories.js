/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Input from './index';

export default {
  title: 'Form/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Input test:',
  name: 'test',
  id: 'test',
};

export const Placeholder = Template.bind({});

Placeholder.args = {
  label: 'Input test:',
  name: 'test',
  id: 'test',
  placeholder: 'Test',
};

export const Error = Template.bind({});

Error.args = {
  label: 'Input test:',
  name: 'test',
  id: 'test',
  error: 'Required field',
};
