import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box } from 'rebass';
import './modal-background.scss';

export function ModalBackground(props) {
  const { isVisible, ...otherProps } = props;

  return (
    <Box
      as="section"
      className={classNames(
        'modal-background-rct-component',
        isVisible,
      )}
      {...otherProps}
    />
  );
}

ModalBackground.propTypes = {
  isVisible: PropTypes.oneOf(['hidden', 'visible']).isRequired,
  onClick: PropTypes.func.isRequired,
};

