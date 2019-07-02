import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from 'rebass';
import {
  sortButtonDown,
  sortButtonDownActive,
  sortButtonUp,
  sortButtonUpActive,
} from 'images';
import './header-cell.scss';

function getImageSrc(arrangement, sortColumn, tableOrder) {
  if (tableOrder.includes(arrangement) && tableOrder.includes(sortColumn)) {
    return arrangement === 'asc' ? sortButtonUpActive : sortButtonDownActive;
  }

  return arrangement === 'asc' ? sortButtonUp : sortButtonDown;
}

export function HeaderCell(props) {
  const {
    cellTitle,
    changeOrder,
    sortColumn,
    tableOrder,
  } = props;

  return (
    <Flex className="header-cell-rct-component">
      <Flex className="header-cell-rct-component__content-container">
        <p className="cell-title">{cellTitle}</p>
        <Flex className="buttons-container">
          <Image
            src={getImageSrc('asc', sortColumn, tableOrder)}
            className="sort-button-up"
            alt="sort-button-up"
            onClick={() => changeOrder(sortColumn, 'asc')}
          />
          <Image
            src={getImageSrc('desc', sortColumn, tableOrder)}
            className="sort-button-down"
            alt="sort-button-down"
            onClick={() => changeOrder(sortColumn, 'desc')}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

HeaderCell.propTypes = {
  cellTitle: PropTypes.string.isRequired,
  changeOrder: PropTypes.func.isRequired,
  sortColumn: PropTypes.string.isRequired,
  tableOrder: PropTypes.string.isRequired,
};

