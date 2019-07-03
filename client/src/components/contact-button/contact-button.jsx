import React from 'react';
import { MESSAGES } from 'utils/messages';
import './contact-button.scss';

export function ContactButton() {
  return (
    <button className="contact-button-rct-component">
      {MESSAGES.CONTACT_BUTTON}
    </button>
  );
}

