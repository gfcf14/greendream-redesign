import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import './table-cell.scss';

function renderAppIcon(icon) {
  return icon ? (
    <Image
      src={icon}
      className="table-cell-rct-component__app-icon"
      alt="app-icon"
    />
  ) : '';
}

export function TableCell({ cellText, icon }) {
  return (
    <Flex className="table-cell-rct-component">
      {renderAppIcon(icon)}
      <p className={classNames(
        'table-cell-rct-component__cell-text',
        icon ? 'non-centered' : '',
      )}
      >
        {cellText}
      </p>
    </Flex>
  );
}

TableCell.propTypes = {
  cellText: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

TableCell.defaultProps = {
  icon: '',
};

