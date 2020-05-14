import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './index';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <Button
    icon="fas fa-paper-plane fa-lg"
    onClick={action('button click')}
  />
);

export const Disabled = () => (
  <Button
    disabled
    icon="fas fa-paper-plane fa-lg"
    onClick={action('button click')}
  />
);
