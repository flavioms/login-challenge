/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Menu from './index';

export default {
  title: 'Form/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {};
