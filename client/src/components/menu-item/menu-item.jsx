import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'rebass';
import classNames from 'classnames';
import colors from 'styles/_colors.scss';
import './menu-item.scss';

export function MenuItem({ itemName, itemPath, itemType }) {
  return (
    <Link
      className={classNames(
        'menu-item-rct-component',
        itemType,
      )}
      color={colors.white}
      href={`${process.env.PUBLIC_URL}${itemPath}`}
    >
      <li>{itemName}</li>
    </Link>
  );
}

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemPath: PropTypes.string,
  itemType: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  itemPath: '#',
};

