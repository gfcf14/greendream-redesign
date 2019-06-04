import React from 'react';
import App from './app';

describe('App Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <App />
  );

  it ('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

