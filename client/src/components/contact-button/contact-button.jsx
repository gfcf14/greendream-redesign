import React from 'react';
import PropTypes from 'prop-types';
import { MESSAGES } from 'utils/messages';
import './contact-button.scss';

export function ContactButton({ modal, toggleModal }) {
  return (
    <button
      className="contact-button-rct-component"
      onClick={() => toggleModal(modal >= 0 ? -1 : 0)}
    >
      {MESSAGES.CONTACT_BUTTON}
    </button>
  );
}

ContactButton.propTypes = {
  modal: PropTypes.number.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

