import React from 'react';
import { ContactButton } from 'components';

describe('ContactButton Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <ContactButton />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

