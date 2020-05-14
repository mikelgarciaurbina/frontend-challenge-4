import React from 'react';

import Input from '../Input';
import Footer from './index';

export default {
  title: 'Footer',
  component: Footer,
};

export const Default = () => (
  <Footer>Footer</Footer>
);

export const WithInput = () => (
  <Footer><Input /></Footer>
);
