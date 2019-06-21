import React from 'react';
import { HeaderCell } from 'components';

describe('HeaderCell Component Unit Test', () => {
  const cellTitle = 'sample';

  const wrapper = mountWithIntl(
    <HeaderCell cellTitle={cellTitle} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct cell title', () => {
    expect(wrapper.find('p').text()).toEqual(cellTitle);
  });
});

