import React from 'react';
import { PageTitle } from 'components';

describe('PageTitle Component Unit Test', () => {
  const title = 'sample';

  const wrapper = mountWithIntl(
    <PageTitle title={title} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the title correctly', () => {
    expect(wrapper.text()).toEqual(title);
  });
});

