import React from 'react';

import Message from '../Message';
import Body from './index';

export default {
  title: 'Body',
  component: Body,
};

export const Default = () => (
  <Body>Body</Body>
);

export const WithMessages = () => (
  <Body>
    <Message author="bot" text="Test message" />
    <Message author="user" text="Test message" />
  </Body>
);
