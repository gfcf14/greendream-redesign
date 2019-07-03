import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Flex } from 'rebass';
import classNames from 'classnames';
import shortid from 'shortid';
import { HeaderCell, TableCell } from 'components';
import { injectItemKey } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './page-table.scss';

function getTable(tableName, tableOrder, setTableData) {
  axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/table`, {
    params: {
      tableName,
      tableOrder,
    },
  }).then((response) => {
    setTableData(response.data);
  });
}

function renderTableRows(tableData) {
  return tableData.map(injectItemKey).map((tableRow, i, arr) => (
    <Flex
      className={classNames(
        'page-table-rct-component__table-row',
        i % 2 === 0 ? 'even' : 'odd',
        arr.length - 1 === i ? 'last' : '',
      )}
      key={tableRow.key}
    >
      <TableCell cellText={tableRow.name} icon={tableRow.imgurl} />
      <TableCell cellText={tableRow.language} />
      <TableCell cellText={tableRow.count} />
    </Flex>
  ));
}

function renderHeaderCells(changeOrder, tableOrder) {
  const HEADER_CELLS = [
    MESSAGES.PAGE_TABLE_NAMES,
    MESSAGES.PAGE_TABLE_LANGUAGE,
    MESSAGES.PAGE_TABLE_PLAYS,
  ];

  return HEADER_CELLS.map((headerCell) => {
    const sortColumn = headerCell === MESSAGES.PAGE_TABLE_PLAYS ? 'count' : headerCell.toLowerCase();
    const headerCellProps = {
      cellTitle: headerCell,
      changeOrder,
      sortColumn,
      tableOrder,
    };

    return <HeaderCell key={shortid.generate()} {...headerCellProps} />;
  });
}

export function PageTable({ tableName }) {
  const [tableData, setTableData] = useState([]);
  const [tableOrder, setTableOrder] = useState('order by id desc');

  useEffect(() => {
    const getFirst = () => {
      getTable(tableName, tableOrder, setTableData);
    };

    getFirst();
  }, [tableOrder]);

  function changeOrder(sortColumn, arrangement) {
    setTableOrder(`order by ${sortColumn} ${arrangement}`);
  }

  return (
    <Flex className="page-table-rct-component">
      <Flex className="page-table-rct-component__table-header">
        {renderHeaderCells(changeOrder, tableOrder)}
      </Flex>
      {renderTableRows(tableData)}
    </Flex>
  );
}

PageTable.propTypes = {
  tableName: PropTypes.string.isRequired,
};

