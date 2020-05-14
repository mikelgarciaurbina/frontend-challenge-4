import React from 'react';

import Header from './index';

export default {
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <section class="hero is-dark">
    <Header>Landbot</Header>
  </section>
);
