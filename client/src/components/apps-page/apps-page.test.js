import React from 'react';
import { AppsPage } from 'components';

describe('AppsPage Component Unit Test', () => {
  const appsPageProps = {
    description: 'hi',
    tableName: 'Programs',
  };

  const wrapper = mountWithIntl(
    <AppsPage {...appsPageProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the description is rendered correctly', () => {
    expect(wrapper.find('p.table-description').text()).toEqual(appsPageProps.description);
  });

  it('checks that the table name is rendered correctly', () => {
    expect(wrapper.find('AppsPage').props().tableName).toEqual(appsPageProps.tableName);
  });
});

