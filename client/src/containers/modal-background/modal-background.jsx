import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Box } from 'rebass';
import './modal-background.scss';

export function ModalBackground(props) {
  const { isModal, isVisible, ...otherProps } = props;

  return (
    <Box
      as="section"
      className={classNames(
        'modal-background-rct-component',
        isModal,
        isVisible,
      )}
      {...otherProps}
    />
  );
}

ModalBackground.propTypes = {
  isModal: PropTypes.oneOf(['modal', '']).isRequired,
  isVisible: PropTypes.oneOf(['hidden', 'visible']).isRequired,
  onClick: PropTypes.func.isRequired,
};

