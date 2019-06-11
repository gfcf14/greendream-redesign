import React from 'react';
import { PageButton } from 'components';

describe('PageButton Component Unit Test', () => {
  const buttonText = 'sample';

  const wrapper = mountWithIntl(
    <PageButton buttonText={buttonText} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the right text', () => {
    expect(wrapper.text()).toEqual(buttonText);
  });
});

