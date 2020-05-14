import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from './index';

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => (
  <Input
    onChange={action('input change')}
    onKeyUp={action('input keyUp')}
    placeholder="Type here..."
  />
);

export const WithDefaultValue = () => (
  <Input
    onChange={action('input change')}
    onKeyUp={action('input keyUp')}
    placeholder="Type here..."
    value="test"
  />
);
