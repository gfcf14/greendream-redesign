import React from 'react';
import { PageBody } from 'components';

describe('PageBody Component Unit Test', () => {
  const content = 'sample';

  const wrapper = mountWithIntl(
    <PageBody content={content} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the content correctly when it is a string', () => {
    expect(wrapper.text()).toEqual(content);
  });
});

