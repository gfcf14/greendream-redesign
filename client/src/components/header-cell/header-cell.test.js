import React from 'react';
import { HeaderCell } from 'components';

describe('HeaderCell Component Unit Test', () => {
  const headerCellProps = {
    cellTitle: 'sample',
    changeOrder: jest.fn(),
    sortColumn: 'id',
    tableOrder: 'desc',
  };

  const wrapper = mountWithIntl(
    <HeaderCell {...headerCellProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct cell title', () => {
    expect(wrapper.find('p.cell-title').text()).toEqual(headerCellProps.cellTitle);
  });

  it('checks that the changeOrder function is correctly called', () => {
    wrapper.find('img').forEach(currImage => currImage.simulate('click'));

    expect(headerCellProps.changeOrder).toHaveBeenCalledTimes(2);
  });

  it('renders the correct sortColumn arrangement', () => {
    expect(wrapper.find('HeaderCell').props().sortColumn).toEqual(headerCellProps.sortColumn);
  });

  it('renders the correct tableOrder arrangement', () => {
    expect(wrapper.find('HeaderCell').props().tableOrder).toEqual(headerCellProps.tableOrder);
  });
});

