import React from 'react';
import { TutorialsTable } from 'components';

describe('TutorialsTable Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <TutorialsTable />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

