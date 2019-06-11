import React from 'react';
import { HomePage } from 'components';

describe('HomePage Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <HomePage />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

