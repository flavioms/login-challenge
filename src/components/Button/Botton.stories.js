/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Button from './index';

export default {
  title: 'Form/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'submit',
  label: 'Cadastrar',
};
