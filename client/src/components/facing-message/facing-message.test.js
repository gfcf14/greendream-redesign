import React from 'react';
import { FacingMessage } from 'components';

describe('FacingMessage Component Unit Test', () => {
  const facingMessageProps = {
    acceptedCookie: true,
    setAcceptCookies: jest.fn(),
  };

  const wrapper = mountWithIntl(
    <FacingMessage {...facingMessageProps} />
  );


  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the proper class exists', () => {
    expect(wrapper.find('div.facing-message-rct-component').hasClass('hidden')).toBe(true);
  });

  it('checks that setAcceptCookies is called', () => {
    wrapper.find('button').simulate('click');

    expect(facingMessageProps.setAcceptCookies).toHaveBeenCalled();
  });
});
