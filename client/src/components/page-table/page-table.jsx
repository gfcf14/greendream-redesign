import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Link } from 'rebass';
import classNames from 'classnames';
import shortid from 'shortid';
import { HeaderCell, TableCell } from 'components';
import { getTable, injectItemKey } from 'utils/helpers';
import { MESSAGES } from 'utils/messages';
import './page-table.scss';

function renderTableRows(tableData, tableName) {
  return tableData.map(injectItemKey).map((tableRow, i, arr) => {
    const {
      name,
      language,
      count,
      imgurl,
      key,
    } = tableRow;

    return (
      <Flex
        className={classNames(
          'page-table-rct-component__table-row',
          i % 2 === 0 ? 'even' : 'odd',
          arr.length - 1 === i ? 'last' : '',
        )}
        key={key}
      >
        <Link
          className="preview-link"
          href={`${process.env.PUBLIC_URL}/${tableName.toLowerCase()}/${imgurl}`}
        >
          <TableCell cellText={name} logo={imgurl} />
          <TableCell cellText={language} />
          <TableCell cellText={count} />
        </Link>
      </Flex>
    );
  });
}

function renderHeaderCells(changeOrder, tableOrder) {
  const HEADER_CELLS = [
    MESSAGES.PAGE_TABLE_NAME,
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

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const getFirst = () => {
      getTable(tableName, tableOrder, setTableData);
    };

    getFirst();
  }, [tableOrder]);
  /* eslint-enable react-hooks/exhaustive-deps */

  function changeOrder(sortColumn, arrangement) {
    setTableOrder(`order by ${sortColumn} ${arrangement}`);
  }

  return (
    <Flex className="page-table-rct-component">
      <Flex className="page-table-rct-component__table-header">
        {renderHeaderCells(changeOrder, tableOrder)}
      </Flex>
      {renderTableRows(tableData, tableName)}
    </Flex>
  );
}

PageTable.propTypes = {
  tableName: PropTypes.string.isRequired,
};

