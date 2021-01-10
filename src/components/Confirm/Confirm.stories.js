/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Confirm from './index';

export default {
  title: 'Form/Confirm',
  component: Confirm,
};

const Template = (args) => <Confirm {...args} />;

export const Default = Template.bind({});

Default.args = {
  id: 'term',
  name: 'term',
  value: false,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};
