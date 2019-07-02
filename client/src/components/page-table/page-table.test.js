import React from 'react';
import { PageTable } from 'components';

describe('PageTable Component Unit Test', () => {
  const wrapper = mountWithIntl(
    <PageTable tableName="Games" />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render three HeaderCell components as headers', () => {
    expect(wrapper.find('HeaderCell')).toHaveLength(3);
  });
});

