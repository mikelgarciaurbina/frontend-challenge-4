import React from 'react';

import Message from './index';

export default {
  title: 'Message',
  component: Message,
};

export const BotMessage = () => (
  <Message author="bot" text="Test message" />
);

export const UserMessage = () => (
  <Message author="user" text="Test message" />
);
