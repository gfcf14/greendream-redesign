import React from 'react';
import { ContactButton } from 'components';

describe('ContactButton Component Unit Test', () => {
  const contactButtonProps = {
    modal: 0,
    toggleModal: jest.fn(),
  };

  const wrapper = mountWithIntl(
    <ContactButton {...contactButtonProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the toggleModal function is called', () => {
    wrapper.find('button').simulate('click');
    expect(contactButtonProps.toggleModal).toHaveBeenCalled();
  });
});

