import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Flex, Image } from 'rebass';
import { getImageSource } from 'utils/helpers';
import './table-cell.scss';

function renderAppIcon(logo) {
  return logo ? (
    <Image
      src={getImageSource(logo)}
      className="table-cell-rct-component__app-logo"
      alt={`${logo}-logo`}
    />
  ) : '';
}

export function TableCell({ cellText, logo }) {
  return (
    <Flex className="table-cell-rct-component">
      {renderAppIcon(logo)}
      <p className={classNames(
        'table-cell-rct-component__cell-text',
        logo ? 'non-centered' : '',
      )}
      >
        {cellText}
      </p>
    </Flex>
  );
}

TableCell.propTypes = {
  cellText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  logo: PropTypes.string,
};

TableCell.defaultProps = {
  logo: '',
};

