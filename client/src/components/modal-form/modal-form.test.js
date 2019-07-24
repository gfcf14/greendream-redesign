import React from 'react';
import { ModalForm } from 'components';
import { DEFAULT_FORM_CONFIG } from 'utils/constants';

describe('ModalForm Component Unit Test', () => {
  const modalFormProps = {
    config: DEFAULT_FORM_CONFIG,
    modal: -1,
    fadeOut: jest.fn(),
  };

  const wrapper = mountWithIntl(
    <ModalForm {...modalFormProps} />
  );

  it('renders without crashes', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the fadeOut function is called', () => {
    wrapper.find('span').simulate('click');
    expect(modalFormProps.fadeOut).toHaveBeenCalled();
  });
});

